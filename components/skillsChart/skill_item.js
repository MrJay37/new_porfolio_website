import BarChartStyles from './barChart.module.scss'

export default function SkillItem({ title, value }) {
    const barSteps = [...new Array((value * 100)/5).keys()]

    return <dd className={BarChartStyles.entry}>
        <span className={BarChartStyles.label}>
            {title}
        </span>
        <div className={BarChartStyles.barContainer}>
            <div className={BarChartStyles.barBeam}>
                {barSteps.map((v, i) => {
                    
                    return <div 
                        key={i}
                        style = {
                            {
                                animationDelay: `${i*50}ms`
                            }
                        } 
                        className={i === barSteps.length - 1 ? BarChartStyles.barStep_max: BarChartStyles.barStep} 
                    />
                })}
            </div>
        </div>    
    </dd>
}