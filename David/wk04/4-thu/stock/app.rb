require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
  get '/' do

    @languages = ['java', 'ruby', 'python']


    erb :index


  end
  #http://:4567/?stock=AAPL
  get '/stock' do

    result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])
    quote = result[ params[:stock] ]
    @price = quote.lastTrade

    erb :result
  end

  get 'about' do
    'about me'
  end
