class Interview < ApplicationRecord
  has_one_attached :resume
  has_many :user_interviews, dependent: :delete_all

    def no_conflicts(members, new_interview)
    members.each do |member|
      @conflicting_interviews = Interview.select("interviews.id").joins(:user_interviews).where(scheduled_time: new_interview.scheduled_time .. new_interview.end_time)
                                .or(Interview.select("interviews.id").joins(:user_interviews).where(end_time: new_interview.scheduled_time .. new_interview.end_time))
                                .or(interview.select("interviews.id").joins(:user_interviews).where("scheduled_time < ? AND end_time > ?", new_interview.scheduled_time, new_interview.end_time))
      if conflicting_interviews
        return false
      end
    end
    return true
  end

end
