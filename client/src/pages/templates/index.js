import React from 'react'
import { useParams } from 'react-router'
import DefaultLayout from '../../components/DefaultLayout'
import Template1 from './Template1'
import Template2 from './Template2'

function Templates() {
    const params = useParams()

    const gettemplate = () => {
        switch(params.id)
        {
            case '1' : {
                return <Template1 />
            }

            case '2' : {
                return <Template2 />
            }
        }
    }
    return (
        <div>
            <DefaultLayout>
            
            {gettemplate()}

            </DefaultLayout>
            
        </div>
    )
}

export default Templates
