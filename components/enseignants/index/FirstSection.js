import React from 'react'
import style from '../../../css/Enseignant.home.module.css'
import Link from 'next/link'

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
      <Link href={'/ajouter-unarticle'}>ajouter un article</Link>
    </div>
  </div>
  )
}

export default FirstSection