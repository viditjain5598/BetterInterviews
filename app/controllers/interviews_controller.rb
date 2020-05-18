class InterviewsController < ApplicationController
  before_action :find_interview, only: [:show, :edit, :update, :destroy]

  def index
    @interviews = Interview.all.order("scheduled_time ASC")
  end

  def show
  end


  def new
    @interview = current_user.interviews.build
  end

  def create
    @interview = current_user.interviews.build(interview_params)

    if @interview.save
      redirect_to @interview, notice: "Successfully saved interview details"
      UserMailer.with(:interview=>@interview, :user_id=>member).updation_mails.deliver_later(wait_until: @interview.scheduled_time - 30.minutes)
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @interview.update(interview_params)
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

  def interview_params
    params.require(:interview).permit(:title, :description, :scheduled_time, :resume)
  end

  def find_interview
    @interview = Interview.find(params[:id])
  end

end