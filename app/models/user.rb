class User < ApplicationRecord
    enum :isadmin, {normal_user: 0, admin: 1}

    has_secure_password
    has_many :tasks, dependent: :destroy

    validates :title, presence: true
end
