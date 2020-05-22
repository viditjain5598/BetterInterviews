# Preview all emails at http://localhost:3000/rails/mailers/interview_mailer
class InterviewMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/interview_mailer/reminder_email
  def reminder_email(id)
    interview = Interview.find(id)
    InterviewMailer.reminder_email(interview)
  end

  # Preview this email at http://localhost:3000/rails/mailers/interview_mailer/updation_email
  def updation_email
    InterviewMailer.updation_email
  end

end
