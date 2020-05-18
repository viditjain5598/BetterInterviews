class UserMailer < ApplicationMailer
  
  def reminder_mails
    @interview = params[:interview]
    @user = User.find(params[:user_id])
    mail(to: @user.email, subject: "REMINDER: Interview in 30 Minutes")
  end

end
