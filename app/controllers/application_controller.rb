class ApplicationController < ActionController::API
    include ActionController::Cookies

    def authorize 
        return app_response(status_code: 401, message: "You are unauthorized to view this page")unless session.include? :user_id
    end
end
