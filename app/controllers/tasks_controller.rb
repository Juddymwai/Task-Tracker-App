class TasksController < ApplicationController

    before_action :authorize
    before_action :authorize_admin
    skip_before_action :authorize_admin, only:[:index, :show]


    def show 
        # task = Task.find_by(id: session[:user_id])
        task = Task.find(params[:id])
        
        if task
            render json: task
        else
            render json: { error: "No available tasks at the moment" }, status: :unauthorized
        end

    end

    def index 
        task= Task.all 
        render json: task
    end 

    def create 
        user = User.find(session[:user_id])
        # user = User.find_by(isadmin: session[:isadmin])
        render json: {error: "not authorised"} unless user

        task = user.tasks.create(task_params)
        render json: task
    end

   


    def update 
        user = User.find(session[:user_id])
        render json: {error: "not authorised"} unless user
        task = Task.find(params[:id])


        task.update(task_params)
        render json: task

    end

   

    def destroy 

        task = Task.find_by(id: params[:id]) 
        if task
            task.destroy
            head :no_content
        else 
            render json: {error: "task not found"}, status: :not_found

        end
        
    end

    private 

    def task_params 
        params.permit(:title, :duration, :user_id)

    end
    # def find_task  
    #     task = Task.find(params[:id])

    # end 
end
