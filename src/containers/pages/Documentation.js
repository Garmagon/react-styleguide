import React from 'react';
import styles from 'styles/containers/pages/Documentation.module.scss'
import Header from 'containers/components/Header'
import Content from 'containers/components/Content'
import Sidebar from 'containers/components/Sidebar'

const documentation = () => {
  return (
    <div className={styles.Container}>
      <Header></Header>
      <div class={styles.Main}>
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  )
}

export default documentation;