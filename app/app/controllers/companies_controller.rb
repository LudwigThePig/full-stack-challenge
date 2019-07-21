class CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @companies = Company.all
  end
  
  # def new
  #   @company = Company.new
  # end

  def create
    @company = Company.new(company_params)
    respond_to do |format|
      if @company.save
        format.html {redirect_to '/', notice: 'Company added!'}
        format.json {render json: Company.all}
      else
        format.html {render :new}
      end
    end
  end


  def company_params
    params.require(:company).permit(:name, :google, :founded_date, :city, :state, :description, :company)
  end

end
