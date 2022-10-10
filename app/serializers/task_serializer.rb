class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :duration, :user_id
end
