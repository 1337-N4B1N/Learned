import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
       <Script>
            {'alert("Welcome to contact page")'}
        </Script>
      This is contact..Hello
    </div>
  )
}

export default contact
export const metadata = {
  title: "Contact Facebook",
  description: "This is facebok and we can know faces using facebook",
};

