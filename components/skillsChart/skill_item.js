import BarChartStyles from './barChart.module.scss'

export default function SkillItem({ title, value }) {
    const barSteps = [...new Array((value * 100)/5).keys()]
    
    console.log(barSteps)
    return <dd className={BarChartStyles.entry}>
        <span className={BarChartStyles.label}>
            {title}
        </span>
        <div className={BarChartStyles.barContainer}>
            <div className={BarChartStyles.barBeam}>
                {barSteps.map((v, i) => <div key={i} className={BarChartStyles.barStep} />)}
            </div>
        </div>    
    </dd>
}