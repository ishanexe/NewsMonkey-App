  import React, { Component } from 'react';
  import NewsItem from './NewsItem';
  import Spinner from './Spinner';

  export default class News extends Component {
    // sequence: contructor -> render menthod -> componentdidMount(renders the data components for first time (for fetching api's))
    // we are receeving props from the app.js
      static defaultProps={  //defualt prop types for country category and page size
        country:'in',
        pageSize:8,
        category:'general'
      }

      //to capitalize the firts char pf string
      capitalizeFirstLetter=(string)=> {
        if (!string) return ""; // Handle empty or null strings
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      
      
      constructor(props){
          super(props);
          //these are our states
          this.state = {
              articles:[],  //empty array of articles
              loading: true,   //as of now, data not fetched so show loading
              page:1 , //intial we'll be on the page one
              // category: "${this.props.country}"
          }
          //here i'll change the title when contsurtor is called
          let newTitle=this.capitalizeFirstLetter(this.props.category);
          if(newTitle==='General'){
            document.title=` NewsMonkey - Get news anytime`;
          }
          else document.title=`${newTitle} - NewsMonkey`;
      }


      //update news for prev,next
      updateNews=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6e60fead4a84a7aa63fffcf36177a3c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);  //returns a promise
        let parsedData= await data.json(); // converted into json format
        console.log(parsedData);
        window.scrollTo(0, 0);
        this.setState({
          articles:parsedData.articles, //filling articles with parsedData, so we need article section from parsed data
          loading:false,   //data fetched,so no loading required
          totalResults: parsedData.totalResults
        })
      }

      // now we  will fetch the data from api dirtely and will noit hardcode it 
      async componentDidMount(){   //this is a async function
        this.updateNews();
      }


      //for going previous
      goPrev= async()=>{
          this.setState({page:this.state.page - 1});
          this.updateNews();
      }
      //for going to next page
      goNext=async ()=>{
        this.setState({page:this.state.page + 1});
        this.updateNews();
      }

      render() {  //to render html components in react
        return (
          <>
            <div className="container my-3">
              <h2 className="text-center my-3">{this.props.category==='general'?"Top Headlines - NewsMoneky":this.capitalizeFirstLetter(this.props.category)}</h2>
              {this.state.loading ? (  //checking if state.loading==true, if yes show loading on page
                <Spinner />
              ) : (    //if no loading then render the page
                <div>
                <div className="row">
                  {this.state.articles.map((element) => {
                    if (element.title === '[Removed]') {
                      return null;
                    } else {
                      return (
                        <div className="col-md-4" key={element.url}>
                          <NewsItem
                            title={element.title}
                            desc={element.description}
                            imgUrl={element.urlToImage}
                            fullNews={element.url}
                            author={element.author}
                            publishedAt={element.publishedAt}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
            <div className='d-flex justify-content-around'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.goPrev} >&laquo;Previous</button>
              <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.goNext}>Next &raquo;</button>
            </div>
          </div>
          )}
          </div>
          </>
        );
      }    
  }
