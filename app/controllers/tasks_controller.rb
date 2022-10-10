class TasksController < ApplicationController


    def show 
        task = Task.find_by(id: session[:user_id])
        
        if task
            render json: task
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end

    end

    def update 


    end
    def destroy 

        task = Task.find_by(id: session[:user_id]) 
        if task
            task.destroy(task_params)
            head :no_content
        else 
            render json: {error: "task not found"}, status: :not_found

        end
    end
end
