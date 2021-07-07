import SliderComponent from "../UI/Slider/SliderComponent";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setSliderPosition } from '../../store/dataSlice';
import styles from './XAxisSliderControl.module.scss';
import formatDate from '../../utils/formatDate';
  
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
        <span aria-label="first date">{formatDate(start, "yyyy/MMM")}</span>
        <span aria-label="last date">{formatDate(end, "yyyy/MMM")}</span>
      </div>
      </div>
    );
  }

  export default XAxisSliderControl;