class ApplicationController < ActionController::API
    include ActionController::Cookies

    wrap_parameters format: []


    private

    def authorize 
        render json: {errors:["Login or create account"]} unless session.include? :user_id
    end

    def authorize_admin 
        render json: {errors: ["not authorised to perform this action"]} unless session[:isadmin] == "admin"
        # puts session[:isadmin]
    end
end
