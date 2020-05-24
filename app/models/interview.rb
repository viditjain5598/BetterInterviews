class Interview < ApplicationRecord
  has_one_attached :resume
  has_many :user_interviews, dependent: :delete_all
end
