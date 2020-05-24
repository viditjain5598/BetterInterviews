class InterviewsController < ApplicationController
  before_action :find_interview, only: [:show, :edit, :update, :destroy]

  def index
    @interviews = Interview.all.order("scheduled_time ASC")
  end

  def show
  end


  def new
    @interview = Interview.new
  end

  def create
    members = params[:interview][:members].split(',')
    if no_conflicts(members, params[:interview])
      @interview = Interview.new(interview_params)
      if @interview.save
        members.each do |member|
          user_interview = UserInterview.new
          user_interview.interview_id = @interview.id
          user_interview.user_id = member
          user_interview.save
          InterviewMailer.reminder_email(@interview, member).deliver_later(wait_until: (@interview.scheduled_time - 30.minutes))
        end
        redirect_to @interview, notice: "Successfully saved interview details"
      else
        render 'new'
      end
    else
      redirect_to root_path, notice: "There was a conflict in that interview!"
    end
  end

  def edit
  end

  def update
    if @interview.update(interview_params)
      InterviewMailer.updation_email(@interview).deliver_now
      redirect_to @interview, notice: "Updated Successfully"
    else
      render 'edit'
    end
  end

  def destroy
    @interview.destroy
    redirect_to root_path
  end

  private

  def no_conflicts(members, new_interview)
    members.each do |member|
      @conflicting_interviews = Interview.select("interviews.id").joins(:user_interviews).where(scheduled_time: new_interview.scheduled_time .. new_interview.end_time)
                                .or(Interview.select("interviews.id").joins(:user_interviews).where(end_time: new_interview.scheduled_time .. new_interview.end_time))
      if conflicting_interviews
        return false
      end
    end
    return true
  end

  def interview_params
    params.require(:interview).permit(:title, :description, :scheduled_time, :end_time, :resume)
  end

  def find_interview
    @interview = Interview.find(params[:id])
  end

end
