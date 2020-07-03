import { Request, Response } from 'express'
import knex from '../database/connection'

class BonsaisController {

  async index(request: Request, response: Response) {
      const bonsais = await knex('bonsais')
        .select([
          'bonsais.*'
        ])
      return response.json(bonsais)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const bonsias = await knex('bonsais').where('id', id).first()

    if(!bonsias){
      return response.status(400).json({ message:'Bonsais not found' })
    }

    return response.json({bonsais: bonsias})
  }

  async create(request: Request, response: Response) {
    const { 
      specie,
      age,
      fertilization_time,
      description
     } = request.body

     const [id] = await knex('bonsais').insert({
      specie,
      age,
      fertilization_time,
      description
     })

     return response.json({ id })
  }
//delete route is not complete 
  async delete(request: Request, response: Response) {
      const { id } = request.params
      const bonsai = await knex('bonsais')
        .where('id', id)
        .select('bonsais.id')
        .first()

      if(bonsai.id !== id) {
        return response.status(401).json({ error:" Operation not permited"})
      }
      await knex('bonsais').where('id', id).delete()
      return response.status(204).send()     
  }
}

export default BonsaisController

