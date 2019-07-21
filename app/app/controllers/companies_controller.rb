class CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find(params[:id])
    @founders = Founder.where(company_id: params[:id])

  end

  def destroy
    @company = Company.delete(params[:id])
  end

  def new
    @company = Company.new
  end

  def update
    @company = Company.find(params[:id])
    if @company.update_attributes(company_params)
      head 200
    else 
      head 400
      print 'bad request'
    end
  end

  def create
    @company = Company.new(company_params)
    respond_to do |format|
      if @company.save
        format.html { redirect_to(@company) }
        format.json {render json: Company.all}
      else
        format.html {render :new}
      end
    end
  end

  private
    def company_params
      params.require(:company).permit(:name, :google, :founded_date, :city, :state, :description, :company)
    end
end
