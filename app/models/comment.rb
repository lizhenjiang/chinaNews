# coding: utf-8
class Comment < ActiveRecord::Base
  default_scope { order('created_at desc') }
  belongs_to :commentable, polymorphic: true

  belongs_to :user
  scope :p_comments ,->{ where(:p_comment_id => nil) }
  scope :lastest, ->{ limit(10) }

  validates :content, presence: true
  
  def p_comment_user_id
    self.class.find(self.p_comment_id).try(:user_id) rescue nil
  end

  before_save do
    self.p_user_id = self.p_comment_user_id
  end

  after_destroy do
    self.r_comments.destroy_all
  end

  def r_comments
    self.class.where(:p_comment_id => self.id)
  end
end
