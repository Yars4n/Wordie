import './App.css';
import React, {useEffect} from 'react';
import Box from './Box';
import Up from './Up';
import Found from './Found';
import {words} from './words';
import GameOver from './GameOver';
import Leaderboard from './Leaderboard';
import Themes from './Themes';
import { useTranslation } from 'react-i18next';
import { wordSR } from './wordSR.js';
import { wordsKR } from './wordsKR.js';
import Home from './Home.js';
 
 

 

const defaultStates = {
    allItemsChecked: false,
    secondRandomLetter: '',
    boxLetters: Array(9).fill(''),
    colors: Array(9).fill('grey'),
    checked: Array(9).fill('unchecked'),
    word: '',
    time: 120,
    count: 0,
    swaps: 100,
    timeReward: 2,
    lose: false
}

function App() {
    
    const { t , i18n} = useTranslation();

  
    const alphabet = t('alphabet');
    
    const alphabet2 = alphabet.split('').reverse().join('');
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const retrievedRandomLetter = alphabet[randomIndex];
    const randomLet = alphabet2[randomIndex];

    // const [allItemsChecked, setAllItemsChecked] = React.useState(defaultStates.allItemsChecked);
    const [randomLetter, setRandomLetter] = React.useState(retrievedRandomLetter);
    const [secondRandomLetter, setSecondRandomLetter] = React.useState(randomLet)
    const [boxLetters, setBoxLetters] = React.useState(defaultStates.boxLetters);
    const [colors, setColors] = React.useState(defaultStates.colors);
    const [checked, setChecked] = React.useState(defaultStates.checked);
    const allItemsChecked = checked.every((item) => item === 'checked');
    const [word, setWord] = React.useState(defaultStates.word);
    const [time, setTime] = React.useState(defaultStates.time);
    const [count, setCount] = React.useState(defaultStates.count);
    const [swaps, setSwaps] = React.useState(defaultStates.swaps);
    const [lose, setLose] = React.useState(defaultStates.lose);
    const [startTime, setStartTime] = React.useState(1);
    const [players, setPlayers] = React.useState([]);
    const [playersSr, setPlayersSr] = React.useState([]);
    const [playersKr, setPlayersKr] = React.useState([]);
    const [order, setOrder] = React.useState(1);
   
    
    const [decision, setDecision] = React.useState(false);

    const [name, setName] = React.useState();
    const [cleared, setCleared] = React.useState(false);
    const [showLead, setShowLead] = React.useState(false);
    const [showThemes, setShowThemes] = React.useState(false);
    const [currentTheme, setCurrentTheme] = React.useState("purple");


    useEffect(() => {
      const alphabet = t('alphabet');
      const alphabet2 = alphabet.split('').reverse().join('');
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      const retrievedRandomLetter = alphabet[randomIndex];
      const randomLet = alphabet2[randomIndex];
      setRandomLetter(retrievedRandomLetter);
      setSecondRandomLetter(randomLet);
  }, [t]);


   useEffect(() => {
    if (i18n.language === 'en') {
      document.body.style.fontFamily = 'Bahn';
    } 
    else if (i18n.language === 'sr') {
      document.body.style.fontFamily = 'sorani-font';
    }
    else if (i18n.language === 'kr') {
      document.body.style.fontFamily = 'Bahn';
    }
    console.log(document.body.style.fontFamily);
  }, [i18n.language]);
     


    const handleLeader = () =>
    {
      setShowLead(!showLead);
    }
     
    const handleHideLead = () =>
    {
      setShowLead(prevState => prevState? false: true);
  
    }
    

    const handleLose = () => {
        setLose(true);
    };

    useEffect(() => {
      const storedPlayers = JSON.parse(localStorage.getItem('players'));
      if (storedPlayers) {
        setPlayers(storedPlayers);
      }
    }, []);

    useEffect(() => {
      const storedPlayers = JSON.parse(localStorage.getItem('playersSr'));
      if (storedPlayers) {
        setPlayersSr(storedPlayers);
      }
    }, []);

    useEffect(() => {
      const storedPlayers = JSON.parse(localStorage.getItem('playersKr'));
      if (storedPlayers) {
        setPlayersKr(storedPlayers);
      }
    }, []);

    const addPlayer = (name) => {
      

     if (i18n.language === 'en'){

      if (name.trim().length !== 0) {
        const newPlayer = {
          id: players.length + 1,
          name: name, 
          points: count
        };
        setPlayers(prevPlayers => {
          const updatedPlayers = [...prevPlayers, newPlayer];
          localStorage.setItem('players', JSON.stringify(updatedPlayers)); // Save items to local storage
          return updatedPlayers;
        });
      }
      setName('');
      setCleared(false);
    }

    else if (i18n.language === 'sr')
    {
      if (name.trim().length !== 0) {
        const newPlayer = {
          id: playersSr.length + 1,
          name: name,
          points: count
        };
        setPlayersSr(prevPlayers => {
          const updatedPlayers = [...prevPlayers, newPlayer];
          localStorage.setItem('playersSr', JSON.stringify(updatedPlayers)); // Save items to local storage
          return updatedPlayers;
        });
      }
      setName('');
      setCleared(false);
    }

    else if (i18n.language === 'kr')
    {
      if (name.trim().length !== 0) {
        const newPlayer = {
          id: playersKr.length + 1,
          name: name,
          points: count
        };
        setPlayersKr(prevPlayers => {
          const updatedPlayers = [...prevPlayers, newPlayer];
          localStorage.setItem('playersKr', JSON.stringify(updatedPlayers)); // Save items to local storage
          return updatedPlayers;
        });
      }
      setName('');
      setCleared(false);
    }
    };
    

    const deletePlayer = (id, lang) => {
      if(lang==='en'){
        const updatedPlayers = players.filter(player => player.id !== id);
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
       }
      else if(lang==='sr'){
        const updatedPlayers = playersSr.filter(player => player.id !== id);
        setPlayersSr(updatedPlayers);
        localStorage.setItem('playersSr', JSON.stringify(updatedPlayers)); 
      }
      else if(lang==='kr'){
        const updatedPlayers = playersKr.filter(player => player.id !== id);
        setPlayersKr(updatedPlayers);
        localStorage.setItem('playersKr', JSON.stringify(updatedPlayers)); 
      }
      
      // Save updated items to local storage
    };

    const handleClear = () =>
    {
      localStorage.clear();
      setCleared(true);
  
    }
  

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleTheme = (theme) => {
      if(theme===currentTheme) 
      setShowThemes(!showThemes);
      else
      {setCurrentTheme(theme)
      setShowThemes(false)}
  };

    const handleCurrentTheme = (theme) => {
      
      
    }; 
    
  
    const restartGame = (name) => {
        // set default states
        // setAllItemsChecked(defaultStates.allItemsChecked);
        setRandomLetter(retrievedRandomLetter);
        setSecondRandomLetter(randomLet);
        setBoxLetters(defaultStates.boxLetters);
        setColors(defaultStates.colors);
        setChecked(defaultStates.checked);
        setWord(defaultStates.word);
        setTime(defaultStates.time);
        setCount(defaultStates.count);
        setSwaps(defaultStates.swaps);
        setLose(defaultStates.lose);
        setStartTime(Date.now());
        addPlayer(name);
    };

    const fillArray = (arr, indexes, value) => {
        indexes.forEach(index => {
            arr[index] = value;
        });
    }

    
    const handleLetter = (index) => {
        const alphabet = order===3?t('vowel'): t('alphabet');
        
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomLett = alphabet[randomIndex];
        
        
       

        const newBoxLetters = [...boxLetters];
        if (checked[index] === 'unchecked') {
          newBoxLetters[index] = randomLetter;
          const newChecked = [...checked];
          newChecked[index] = 'checked';  
          setChecked(newChecked);
          setBoxLetters(newBoxLetters);
          setRandomLetter(secondRandomLetter);
          setSecondRandomLetter(randomLett);
          console.log(order);
          order===4 ? setOrder(1):setOrder(order+1); 
        }
        else if (checked[index] ==='checked')
        {
          if (swaps > 0)
          {
            newBoxLetters[index] = randomLetter;
            const newChecked = [...checked];
            newChecked[index] = 'checked';  
            setChecked(newChecked);
            setBoxLetters(newBoxLetters);
            setRandomLetter(secondRandomLetter);
            setSecondRandomLetter(randomLett);
            setSwaps(swaps - 1)
          }
        }

        let wordList;
         switch (i18n.language) {
        case 'en':
            wordList = words;  
            break;
        case 'sr':
            wordList = wordSR;  
            break;
        case 'kr':
            wordList = wordsKR;  
            break;
        default:
            wordList = words; 
    }
        
        
        
       

 
        function checkWordCombination(indexes) {
          if (wordList.includes(newBoxLetters[indexes[0]] + newBoxLetters[indexes[1]] + newBoxLetters[indexes[2]])) {
              setTime(prev => prev + defaultStates.timeReward);
              const newColors = [...colors];
      
              setWord(newBoxLetters[indexes[0]] + newBoxLetters[indexes[1]] + newBoxLetters[indexes[2]]);
              setCount(count + 1);
      
              fillArray(newBoxLetters, indexes, '');
              setBoxLetters(newBoxLetters);
              fillArray(newColors, indexes, 'green');
              setColors(newColors);
      
              const newChecked = [...checked];
              fillArray(newChecked, indexes, 'unchecked');
              setChecked(newChecked);
      
              setTimeout(() => {
                  fillArray(newColors, indexes, 'grey');
                  setColors(newColors);
              }, 200);
          }
      }

      if (i18n.language==="en" || i18n.language==="kr")
      {
      
      checkWordCombination([0, 1, 2]);
      checkWordCombination([3, 4, 5]);
      checkWordCombination([6, 7, 8]);
      checkWordCombination([0, 3, 6]);
      checkWordCombination([1, 4, 7]);
      checkWordCombination([0, 4, 8]);
      checkWordCombination([6, 4, 2]);
      checkWordCombination([2, 5, 8]);
      }

      else if (i18n.language==="sr")
      {
      
        checkWordCombination([2, 1, 0]);
        checkWordCombination([5, 4, 3]);
        checkWordCombination([8, 7, 6]);
        checkWordCombination([0, 3, 6]);
        checkWordCombination([1, 4, 7]);
        checkWordCombination([8, 4, 0]);
        checkWordCombination([2, 4, 6]);
        checkWordCombination([2, 5, 8]);
      }
    };
 
  
    // Check for lose

     
    useEffect(() => {
       
        const loseCheckup = setInterval(() => {
            if (decision===false) return;
            
            if(startTime===0){
            setStartTime(Date.now());
             
            }
          const timeLeft = (Date.now() - startTime) / 1000 - time;
           
            
            
            if (allItemsChecked===false || swaps >0)
            {
              if (timeLeft<0 || startTime===0)
              return;
            else
            console.log('lost');
            handleLose();
            clearInterval(loseCheckup);
            }
            else
            handleLose();
            clearInterval(loseCheckup);
            

             
        }, 100);
        return () => clearInterval(loseCheckup)
    }, [startTime, time, allItemsChecked, swaps, decision ]);
  
    

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
   

  const handleDecision = (lang) =>
  {
     setDecision(!decision);
     changeLanguage(lang);
     restartGame('');
  }


    return (
    
         
    <div   >
       {decision==false? <Home
        handleDecision = {handleDecision}
       />
       :
       <div className='main'>

       <div className='main-menu' onClick={() => handleDecision(i18n.language)}> 
       <img src="/noun-menu-843636.png" alt="" />
       </div>
       <Leaderboard
          players = {players}
          playersSr = {playersSr}
          playersKr = {playersKr}
          handleClear = {handleClear}
          cleared = {cleared}
          deletePlayer = {deletePlayer}
          showLead = {showLead}
          handleLeader = {handleLeader}
          handleHideLead = {handleHideLead}
          i18n = {i18n}
          currentTheme = {currentTheme}
        /> 

        <Up letter={randomLetter}
            nextLetter={secondRandomLetter}
            time={time}
            swaps={swaps}
            isLost={lose}
            startTime={startTime}
            currentTheme = {currentTheme}
            t = {t}
            i18n = {i18n}
        />
        <Box boxLetters={boxLetters}
             handleLetter={handleLetter}
             colors={colors}
             checked={checked}
             lose={lose}
             currentTheme = {currentTheme}
        />
        <Found
            word={word}
            count={count}
            currentTheme = {currentTheme}
            i18n = {i18n}
            
        />
       
        
        {lose && <GameOver
            restartGame={restartGame}
            addPlayer  = {addPlayer}
            name = {name}
            handleNameChange = {handleNameChange}
            count = {count}
            currentTheme = {currentTheme}
        />}
       
       </div>
       
        }

        
        
    </div>
 

    );
}

export default App;
