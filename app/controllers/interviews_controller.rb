class InterviewsController < ApplicationController
  before_action :find_interview, only: [:show, :edit, :update, :destroy]

  def index
    @interviews = Interview.all.order("created_at DESC")
  end

  def show
  end


  def new
    @interview = Interview.new
  end

  def create
    @interview = Interview.new(interview_params)

    if @interview.save
      redirect_to @interview, notice: "Successfully saved interview details"
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
    params.require(:interview).permit(:title, :description, :scheduled_time)
  end

  def find_interview
    @interview = Interview.find(params[:id])
  end

end
