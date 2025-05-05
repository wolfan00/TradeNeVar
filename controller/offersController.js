import e from 'express';
import offers from '../models/trade_offer.js';
import exp from 'constants';

export const createOffer = async (req, res) =>  {
    try {
        const { offered_product_id, requested_product_id, message } = req.body;
        const userId = req.user.userId; // Kullanıcının kimliğini JWT'den alıyoruz
        // Teklif oluşturma
        const newOffer = await offers.create({
            offered_product_id,
            requested_product_id,
            message,
            offerer_id: userId // Teklifin sahibi olan kullanıcının kimliği
        });

        return res.status(201).json(newOffer);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Teklif oluşturulurken bir hata oluştu.' });
    }
}

export const getIncomingOffers = async (req, res) => {
    try {
        const userId = req.user.userId; // Kullanıcının kimliğini JWT'den alıyoruz
        const offers = await offers.findAll({
            where: {
                requested_product_id: userId // Kullanıcının istediği ürün kimliği
            }
        });
        return res.status(200).json(offers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Teklifler alınırken bir hata oluştu.' });
    }
}
export const getOutgoingOffers = async (req, res) => {
    try {
        const userId = req.user.userId; // Kullanıcının kimliğini JWT'den alıyoruz
        const offers = await offers.findAll({
            where: {
                offered_product_id: userId // Kullanıcının teklif ettiği ürün kimliği
            }
        });
        return res.status(200).json(offers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Teklifler alınırken bir hata oluştu.' });
    }
}
export const getOfferById = async (req, res) => {}

export const deleteOffer = async (req, res) => {}

export const acceptOffer = async (req, res) => {}

export const updateOffer = async (req, res) => {}

export const rejectOffer = async (req, res) => {}