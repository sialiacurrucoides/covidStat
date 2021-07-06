import SliderComponent from "../UI/Slider/SliderComponent";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setSliderPosition } from '../../store/dataSlice';
import styles from './XAxisSliderControl.module.scss';
  
const XAxisSliderControl: React.FC<{step: number, start: string | undefined, end: string | undefined}> = ({step, start, end}) => {
    const sliderPosition = useAppSelector(state => state.data.sliderPosition);
    const dispatch = useAppDispatch();

    const handleChange = (event: object, value: number | number[]) => {
      dispatch(setSliderPosition(Number(value)));
    };
    
    return (
      <div className={styles.container}>
      <SliderComponent 
      step={step}
      sliderPosition={sliderPosition}
      handleChange={handleChange}
      />
      <div className={styles.endPoints}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
      </div>
    );
  }

  export default XAxisSliderControl;