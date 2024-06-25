const knex = require('../database/knex');
const AppError = require('../utils/AppError');


class MyOrdersController {
  async create(request, response) {
    const { dish_id } = request.body;
    const user_id = request.user.id;

    const myOrder = await knex('myOrders').insert({
      user_id,
      dish_id,
    });

    return response.json(myOrder);
}

async index(request,response){
    const user_id = request.user.id;

    const myOrders = await knex('myOrders')
    .select('dishes.*', 'myOrders.dish_id')
    .innerJoin('dishes', 'dishes.id', 'myOrders.dish_id')
    .where({ user_id });

    if (!myOrders) {
      throw new AppError('Carrinho não encontrado.', 404);
    }

    return response.json(myOrders);
    
}

async delete(request, response) {
    const { dish_id } = request.params;
    const user_id = request.user.id;

    await knex('myOrders')
    .where({user_id}, dish_id)
    .delete();

    return response.json();
    }

    async update(request, response) {
      try {
        const { dish_id } = request.params;
        const { quantity } = request.body;
        const user_id = request.user.id;
        const order = await knex('myOrders')
          .where({ user_id, dish_id })
          .first();
  
        if (!order) {
          return response.status(404).json({ error: 'Pedido não encontrado' });
        }
        await knex('myOrders')
          .where({ user_id, dish_id })
          .update({ quantity });
  
        return response.json({ message: 'Pedido atualizado com sucesso' });
      } catch (error) {
        console.error('Erro ao atualizar o pedido:', error);
        return response.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    async getCartQuantity(request, response) {
      try {
        const user_id = request.user.id;
        const count = await knex('carts').count('*').where({ created_by: user_id }).first();
        return response.json({ quantity: count });
      } catch (error) {
        console.error('Erro ao buscar quantidade do carrinho:', error);
        return response.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  }
  
  module.exports = MyOrdersController;