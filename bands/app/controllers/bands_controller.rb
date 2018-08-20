class BandsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Band.all 
    end 

    def show 
        render json: Band.find(params["id"])
    end 

    def create 
        render json: Band.create(params["band"])
    end 

    def delete 
        render json: Band.delete(params["id"])
    end 

    def update
        render json: Band.update(params["id"], params["band"])
    end 
    
end 