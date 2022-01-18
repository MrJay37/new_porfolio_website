export default function SkillItem({ title, value }) {
    return <dd className="entry">
        <span className='label'>
            {title}
        </span>
        <div className="barContainer">
          <div className={`percentage percentage-${value*100}`} />
        </div>
    </dd>
}