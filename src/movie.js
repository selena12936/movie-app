import React,{Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';

class Movie extends Component{

    // 데이터 설정
    static propTypes = {
        title:PropTypes.string.isRequired,
        poster:PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        genre:PropTypes.string.isRequired,
        synopsis: PropTypes.string.isRequired
    }

    render(){
        return(
            <div className="movie">
                <div className="movie_column">
                     <MoviePoster poster ={this.props.poster} alt ={this.props.title}/>
                </div>
                <div className="movie_column">
                    <h1>Title : {this.props.title}</h1>
                    <div className="movie_genres">
                        {this.props.genres.map((genre, index) => <span className="movie_genre"  key={index}>{genre}</span>)}
                    </div>
                    <p className="movie_synopsis">
                        <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />
                        g
                    </p>
                </div>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src= {this.props.poster} alt={this.props.alt} title={this.props.title}
                className="movie_poster"/>
        );
    }
}



export default Movie;