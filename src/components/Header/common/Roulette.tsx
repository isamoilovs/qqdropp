import React, { useState } from 'react'
import HeaderButton from './HeaderButton'


export const Roulette = () => {
  const [topSelected, setTopSelected] = useState(true)

  return (
    <div className="relative pt-[2px] pl-[2px]">
      <div className="relative flex">
        <div className="mt-[-2px] pr-[2px]">
          <HeaderButton
            title="Топ"
            icon='top'
            active={topSelected}
            onPress={() => {
              setTopSelected(true)
              console.log(topSelected)
            }}
          />
          <HeaderButton
            title="Все"
            icon='all'
            active={!topSelected}
            onPress={() => {
              setTopSelected(false)
              console.log(topSelected)
            }}
          />
        </div>
        <CaseList />
      </div>
    </div>
  )
}



const CaseList = () => (
  <div className="grow overflow-hidden">
    <ul className="relative flex ml-[-2px] h-[104px] 2xl:h-[90px] xl:h-[77px] lg:h-[50px]">
      <CaseListItem />
      <CaseListItem />
      <CaseListItem />
      <CaseListItem />
      <CaseListItem />
      <CaseListItem />
      <CaseListItem />
    </ul>
  </div>
)

interface CaseListItemProps {
  src: string
}

const CaseListItem = () => (
  <li className="absolute top-0 left-0 shrink-0 w-[160px] h-full">
    <a href="/user/4402962">
      <div>
        <div>
          <img
            width="110"
            height="82"
            src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkoWdkuXLN6nUl2Zu5Mx2gv2P9on23QHgqktqYWn3J4KRJgA6Zl6C81G5wO_qjcDovJ_Az3Eyu3FztmGdwUIdR5y7eA/110fx82f"
            srcSet="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkoWdkuXLN6nUl2Zu5Mx2gv2P9on23QHgqktqYWn3J4KRJgA6Zl6C81G5wO_qjcDovJ_Az3Eyu3FztmGdwUIdR5y7eA/110fx82fdpx2x 2x"
            alt="SSG 08"
          />
        </div>
        <div>
          <div>Горячечные грёзы</div>
        </div>
      </div>

      <div>
        <div></div>
        <div>
          <div></div>
          <div>sqwok</div>
        </div>
      </div>
    </a>
  </li>
)
