require 'test_helper'

class InterviewMailerTest < ActionMailer::TestCase
  test "reminder_email" do
    mail = InterviewMailer.reminder_email
    assert_equal "Reminder email", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "updation_email" do
    mail = InterviewMailer.updation_email
    assert_equal "Updation email", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
