class FoundersController < ApplicationController
  skip_before_action :verify_authenticity_token



  # GET /founders/new
  def new
    @founder = Founder.new
  end


  def create
    @founder = Founder.new(founder_params)

    if @founder.save
      head 200
    else
      format.html { render :new }
      format.json { render json: @founder.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    @found = Founder.delete(params[:id])
  end

  private
    def founder_params
      puts params
      params.require(:founder).permit(:founder, :title, :company_id)
    end
end
