import { Slider } from '@/components/ui/Slider';

const DualSlider = ({defaultValue = [25, 75], step = 10}) => {
    return (
        <div className="*:not-first:mt-4">
            <Slider
                defaultValue={defaultValue}
                step={step}
            />
        </div>
    )
}

export default DualSlider;