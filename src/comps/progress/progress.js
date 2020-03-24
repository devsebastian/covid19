import * as React from 'react'
import './progress.css'

export default function Progress({ questionNumber, total }) {
    return <div className="progress-container">
        <div className="progress" style={{ width: (questionNumber / total * 100) + "%" }}>
        </div>
    </div>
}
