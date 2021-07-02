import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setSliderPosition } from '../../store/dataSlice';

const useStyles = makeStyles({
    root: {
      width: 500,
      paddingLeft: '1rem'
    },
  });
  
  function valuetext(value: number) {
    return `${value}`;
  }
  
const DiscreteSlider: React.FC<{step: number}> = ({step}) => {
    const classes = useStyles();
    const sliderPosition = useAppSelector(state => state.data.sliderPosition);
    const dispatch = useAppDispatch();

    const handleChange = (event: object, value: number | number[]) => {
      dispatch(setSliderPosition(Number(value)));
    };
  
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
          color='secondary'
          onChange={handleChange}
        />
      </div>
    );
  }

  export default DiscreteSlider;