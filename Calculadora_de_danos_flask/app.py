from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():

    inimigos = [ 
        {
            'nome': 'Arqueiro',
            'foto': 'https://pm1.narvii.com/6395/7f14250b93fee68202000d173eb6044dff30c252_hq.jpg',
            'vida': 20
        },
        {
            'nome': 'Feiticeira',
            'foto': 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_512,h_512/https://movimentorpg.com.br/wp-content/uploads/2019/01/caoista.jpg',
            'vida': 10
        },
        {
            'nome': 'Guerreiro',
            'foto': 'https://uploads.spiritfanfiction.com/fanfics/historias/201812/guerreiros-15235152-221220182018.jpg',
            'vida': 30
        }
    ]

    armas = [
        {
            'nome': 'Espada',
            'foto': 'http://pm1.narvii.com/6343/50a022fa8227bf8de05817d6a56c215143ddda83_00.jpg',
            'dano': 10
        },
        {
            'nome': 'Arco',
            'foto': 'https://rpgmagnolia.weebly.com/uploads/5/8/6/9/5869695/689713144.png',
            'dano': 15
        },
        {
            'nome': 'Magia',
            'foto': 'https://i.ytimg.com/vi/5cVkif2CU9Y/hqdefault.jpg',
            'dano': 20
        }
    ]

    return render_template(
        'index.html',
        inimigos=inimigos,
        armas=armas
    )


if __name__ == '__main__':
    app.run(debug=True)
