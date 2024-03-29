import React, { Component } from 'react';
import ResultsTable from './results-table';
import './textinput.scss';


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      words: 0,
      commas: 0,
      fullstops: 0,
      minWords: 'Minimum of 5 words required',
      maxWords: 'No more that 500 words allowed',
      numberErr: 'No numbers allowed',
      noErr:'',
      warning:'',
      inputValue:[],
      wordArray:[],
      wordList:[],
      tableHeader:[],
      tableRow:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.restrictions = this.restrictions.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.counter = this.counter.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      warning: this.restrictions(),
      wordList: this.state.wordArray
    });
    return (
      this.restrictions(),
      this.counter()
    );
  }

  counter(e) {
    //Get fullstop & comma count with regex and set state
    var fullstopRegex = /\./g;
    var commaRegex = /,/g;
    var wordRegex = /[^a-z\d\s]+/gi;
    var fullstopCounter = (this.state.value.match(fullstopRegex) || []).length;
    var commaCounter = (this.state.value.match(commaRegex) || []).length;
    //Get word count without special chars and spaces using regex and set state of 'words'
    var wordCounter = (this.state.value.trim()//remove whitespace
                      .replace(/[\W]+/g, ' ')
                      .replace(/([a-z]+)\b[.,]/g, '')//remove commas & fullstops
                      .replace(wordRegex, '')
                      .split(' ')// split words into array elements
                      .filter(function(x){// remove empty array eements
                        return x !== '';
                      }) || []);

    //Set state of counter elements
    this.setState({
      fullstops : fullstopCounter,
      commas : commaCounter,
      words : wordCounter.length
    });
  }

  restrictions() {
    var number = !isNaN(this.state.value);
    if (number) {
      //If number detected warn user
      this.setState({warning : this.state.numberErr});
    }
    else{
      //Clear warning if none of the above
      this.setState({warning : this.state.noErr});
    }
  }

  storeInput() {
    //Replace special chars with a space
    var inputValue = this.state.value.replace(/[\W]+/g, ' ');

    //Convert string to lowercase, split into array, sort alphabetically and remove empty values
    var wordArray = inputValue.toLowerCase().split(' ').sort().filter(
      function(x){
        return x !== '';
      });
    this.setState({wordList: wordArray});

    var length = wordArray.length;

    var wordLists = {};

    //Group by First Character
		for (var i = 0; i < length; i ++ ){
			var item = wordArray[i];
			var firstLetter = item.charAt(0);
			wordLists[ firstLetter ] = wordLists[ firstLetter ] || [];
			wordLists[ firstLetter ].push( item );
		}


    //Add table Header
    var thead = Object.keys(wordLists);

    this.setState({
      tableHeader: thead
    });

    //Find object with most largest group of words
    var LargestGroup = 0;
    for (var index in wordLists) {
      if(wordLists[index].length > LargestGroup){
        LargestGroup = wordLists[index].length;
      }
    }
		for(var L = 0; L < LargestGroup+1; L++){
    //Create rows with cells , size largest group
    // TODO:
    //Add in cells and content, if array is less than largest, add empty cell and nobreak space
    // var tableRow = '';
    //   for ( index in wordLists) {
    //     if(!wordLists[index][L]){
    //       tableRow = '';
    //     }else{
    //       tableRow = wordLists[index][L];
    //     }
    //   }
		}
  }


  handleClick(e) {
    //Execute when handleClick is called on an element (button)
    e.preventDefault();
    var words = this.state.value
    var number = words.match(/\d+/g)

    if ((number === null) && (this.state.words < 5)){
      //If wordcount is less than 5 warn user
      console.log('Less than 5'+this.state.words);
      return this.setState({warning : this.state.minWords});
    }
    if ((number === null) && (this.state.words > 500)) {
      //If wordcount is greater than 500 warn user
      console.log('500+');
      return this.setState({warning : this.state.maxWords});
    }
    if (number !== null) {
      //If number detected warn user
      this.setState({warning : this.state.numberErr});
    }

    else{
      var storeInputArr = this.storeInput();
      return (
        this.counter(),
        storeInputArr
      );
    }
  }

  clearInput(e) {
    //Clear counters and table
    e.preventDefault();
    this.setState({
      value: '',
      words: 0,
      commas: 0,
      fullstops: 0,
      warning:'',
      wordArray:'',
      tableHeader:[],
      wordList:[]
    });
  }

  render() {
    var wordList = this.state.wordList;
    var tableHeader = this.state.tableHeader;
    return (
      <>
        <div className="input">
          <h1>Character Words Counter</h1>
          <div className="warning">
            <span>{this.state.warning}</span>
          </div>
          <div className="input_container">
            <form className="form-input-box">
              <textarea id="text-input-box" className="form-control"
                ref="inputBox" name="textarea" rows="7" cols="60"
                onChange={this.handleChange} type="text" value={this.state.value}
                placeholder="Type here to get started... ">
              </textarea>
            </form>

            <button onClick={this.handleClick} className="btn_list" >
              List words
            </button>

            <button onClick={this.clearInput} className="btn_clear" >
              Clear
            </button>

            <div className="counter-results">
              <div className="all_count"><mark>
                Words: <span>{this.state.words},</span></mark>
              </div>

              <div className="all_count"><mark>
                Commas: <span>{this.state.commas}, </span></mark>
              </div>

              <div className="all_count"><mark>
                Fullstops: <span>{this.state.fullstops}, </span></mark>
              </div>
              
            </div>

            <ResultsTable wordList={wordList}
              tableHeader={tableHeader}/>
          </div>
        </div>
      </>
    );
  }
}
export default TextInput;
