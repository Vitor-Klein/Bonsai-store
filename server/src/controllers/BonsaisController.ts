import { Request, Response } from 'express'
import knex from '../database/connection'

class BonsaisController {
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
}

export default BonsaisController

