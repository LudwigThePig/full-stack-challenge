class FoundersController < ApplicationController
  before_action :set_founder, only: [:show, :edit, :update, :destroy]



  # GET /founders/new
  def new
    @founder = Founder.new
  end


  def create
    @founder = Founder.new(founder_params)

    respond_to do |format|
      if @founder.save
        head 200
      else
        format.html { render :new }
        format.json { render json: @founder.errors, status: :unprocessable_entity }
      end
    end
  end





  private
    # Use callbacks to share common setup or constraints between actions.
    def set_founder
      @founder = Founder.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def founder_params
      params.fetch(:founder, {})
    end
end
