import React from 'react'
import style from '../../../css/Enseignant.home.module.css'

function FirstSection() {
  return (
    <div className={style.firstSection}>
    <div target="pic-container" />
    <div target="text-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        esse quidem numquam. Exercitationem ullam minus sed sequi. Eius
        quibusdam natus accusantium dolore blanditiis impedit vero, itaque
        dicta odit consequuntur id.
      </p>
      <button>ajouter un article</button>
    </div>
  </div>
  )
}

export default FirstSection