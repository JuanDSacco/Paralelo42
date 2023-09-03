import React from 'react'
import '../../Styles/styles.scss'
import videoMuestra from '../../assets/Videos/videoMuestra.mp4'

const FilaConstruccion = ({numeroConst}) => {
    return (
        <div>
            <div className='divH3Const'>
                <h3 className='h3Const'>Ejemplo {numeroConst}</h3>
            </div>
            <div className='divVideo'>
                <video controls>
                    <source src={videoMuestra} type='video/mp4' />
                </video>
            </div>
            <div className='divPVideo'>
                <p className='pVideo'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos nulla assumenda unde, cupiditate ipsam porro optio minus dolores laboriosam omnis voluptas deleniti enim beatae. Suscipit, iste optio molestiae quasi, doloribus nemo non corrupti, eveniet debitis praesentium repellat. Libero ea labore rerum, distinctio sed illo saepe autem soluta obcaecati quo alias ipsam eaque magni voluptate vel quas, neque modi blanditiis at expedita rem. Dicta adipisci, cumque in placeat a atque labore non exercitationem aspernatur. Voluptate, amet molestiae. Nostrum cum, commodi nisi soluta atque quis officiis quod iure laudantium. Incidunt nam, nesciunt impedit accusamus, quam natus maxime soluta dolor inventore modi eos cum iusto optio distinctio nihil sit consequatur tempora pariatur fuga consectetur ad, veniam nobis quidem aliquid? Incidunt, qui laboriosam dolores pariatur quos repudiandae animi veniam, atque iusto impedit voluptas? Corporis quae qui amet excepturi dicta consectetur nesciunt, provident aliquid alias, officiis necessitatibus, animi fugiat perferendis enim. Optio amet aspernatur quae delectus totam nihil error adipisci sequi praesentium nobis ab corporis ducimus voluptate inventore deleniti unde, culpa dolorum quasi deserunt? Tempora expedita autem a dolores ullam beatae, id assumenda inventore quod facere sequi vel ab incidunt aut magni officiis eos? Quibusdam maxime aperiam quas quod, cupiditate vero consequatur a facilis.
                </p>
            </div>
        </div>
    )
}

export default FilaConstruccion
