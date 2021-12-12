class CoffeesController < ApplicationController
  before_action :authorize_request, except: :index
  before_action :set_user_coffee, only: [:destroy, :show, :update]

  # GET /coffees
  def index
    @coffees = Coffee.all

    render json: @coffees
  end

  # GET /coffees/1
  def show
    render json: @coffee
  end

  # POST /coffees
  def create
    @coffee = Coffee.new(coffee_params)
    @coffee.user = @current_user
    if @coffee.save
      render json: @coffee, status: :created
    else
      render json: @coffee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coffees/1
  def update
    if @coffee.update(coffee_params)
      render json: @coffee
    else
      render json: @coffee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coffees/1
  def destroy
    @coffee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_coffee
      @coffee = @current_user.coffees.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def coffee_params
      params.require(:coffee).permit(:name, :roast_time, :roast_level, :roaster_settings, :preheat, :yellowing, :browning, :first_crack, :second_crack, :first_crack_end, :end_drop, :notes)
    end

end
