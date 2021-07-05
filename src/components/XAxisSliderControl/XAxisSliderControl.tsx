import SliderComponent from "../UI/Slider/SliderComponent";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setSliderPosition } from '../../store/dataSlice';

  
const XAxisSliderControl: React.FC<{step: number}> = ({step}) => {
    const sliderPosition = useAppSelector(state => state.data.sliderPosition);
    const dispatch = useAppDispatch();

    const handleChange = (event: object, value: number | number[]) => {
      dispatch(setSliderPosition(Number(value)));
    };
    
    return (
      <SliderComponent 
      step={step}
      sliderPosition={sliderPosition}
      handleChange={handleChange}
      />
    );
  }

  export default XAxisSliderControl;