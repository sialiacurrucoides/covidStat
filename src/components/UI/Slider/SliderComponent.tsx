import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: '100%',
      paddingLeft: '1rem'
    }
  });
  
  function valuetext(value: number) {
    return `${value}`;
  }
  
const DiscreteSlider: React.FC<{step: number, 
    sliderPosition: number,
    handleChange: (event: object, value: number | number[]) => void 
    }> = ({step, sliderPosition, handleChange}) => {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <Slider
          defaultValue={1}
          value={sliderPosition}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={step}
          marks
          min={0}
          max={1}
          valueLabelDisplay="auto"
          style={{color: "#bf1363"}}
          onChange={handleChange}
        />
      </div>
    );
  }

  export default DiscreteSlider;