class InterviewMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.interview_mailer.reminder_email.subject
  #
  def reminder_email(interview)
    @interview = interview
    mail to: interview.user.email, subject: "REMINDER: Interview in 30 minutes!"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.interview_mailer.updation_email.subject
  #
  def updation_email(interview)
    @interview = interview
    mail to: interview.user.email, subject: "UPDATE: Interview timings have been updated!"
  end
end
