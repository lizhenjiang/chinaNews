class WeixinController < ApplicationController

	layout false

  def index
  	render :text => params[:echostr]
  end

  def code
		res = Faraday.post "https://api.weixin.qq.com/sns/oauth2/access_token", {
			:appid => "wx7cdd37389daaf639",
			:secret => "b8caf1ccbf6e520c6801c071052ba813",
			:code => params[:code],
			:grant_type => "authorization_code"
		}
		parsed_json = JSON.parse res.body
		# render :text => parsed_json['access_token']
		# session[:weixin_id] = parsed_json['openid']

		@user = User.find_by_weixin_id(parsed_json['openid'])

		if @user
			session[:user_id] = user.id
			render partial: 'bind'
		else
			@user = User.new
			@user.weixin_id = parsed_json['openid']
			render partial: 'register'
		end

  end

  def register
  	user = User.create params[:user]
  	render :text => 'register success'
  end

end