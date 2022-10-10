class ApplicationController < ActionController::API
    include ActionController::Cookies

    def authorize 
        render json: {errors:["Login or create account"]}unless session.include? :user_id
    end

    def authorize_admin 
        render json: {errors: ["not authorisedto perform this action"]}unless session[:isadmin]== true

    end
end
