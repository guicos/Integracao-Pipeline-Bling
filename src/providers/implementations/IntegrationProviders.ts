import 'dotenv/config';
import axios from 'axios';
import FormData from "form-data";
import { IAPIcosuming } from "../IAPIconsuming";
import { MainDataIntegration } from "../../entities/MainDataIntegration";

export class IntegrationProviders implements IAPIcosuming{

    async getDataBusiness():Promise<any>{
        let data = [];
        let result = [];
        await axios.get<IAPIcosuming[]>('https://teste265.pipedrive.com/api/v1/deals', {
            params: {
                limit: 500,
                api_token: process.env.API_TOKEN_PIPE,
                status: "won"
                }
            })
            .then(response => {
                data.push(response.data)
            }).catch(err =>{
                console.log(err)
            })
            data.map(element => {
                for(let i = 0 ; i < element.data.length ; i++){
                    result.push({
                         
                        id: element.data[i].id,
                        name: element.data[i].org_name,
                        service: element.data[i].status,
                        describe: element.data[i].title,
                        qtt: element.data[i].pipeline_id,
                        value: element.data[i].value,
                        value_once: element.data[i].value,
                        date: element.data[i].won_time.split(" ")[0]
                    })
                }                
            })
        return result
    }

    async postDataOrders(data: MainDataIntegration): Promise<void>{
        console.log(data, "Entrei")
        let form = new FormData();
        let xml = '<?xml version="1.0" encoding="UTF-8"?>';
        xml += `<pedido>`
        xml += `<cliente><nome>${data.name}</nome></cliente>`;
        xml += `<data>${data.date}</data>`
        xml += `<volume><servico>${data.service}</servico></volume>`;
        xml += `<item><codigo>${data.id}</codigo><descricao>${data.describe}</descricao><qtde>${data.qtt}</qtde><vlr_unit>${data.value_once}</vlr_unit></item>`
        xml += `<parcela><vlr>${data.value}</vlr></parcela>`   
        xml += '</pedido>'

        form.append('apikey', process.env.API_KEY_BLING);
        form.append('xml', xml);

        await axios.post<IAPIcosuming[]>('https://bling.com.br/Api/v2/pedido/json/', form, { headers: form.getHeaders() })
        .then(response =>{
            console.log("Order created successfully")
        }).catch(err =>{
            console.log(err)
        })
    }
    
    async getOrders(): Promise<any>{
        let data = [];
        let result = [];
        await axios.get<IAPIcosuming[]>(`https://bling.com.br/Api/v2/pedidos/json/?apikey=${process.env.API_KEY_BLING}`)
            .then(response => {
                data.push(response.data)
            }).catch(err =>{
                console.log(err)
            })
            
            data.map(element =>{
                for(let i = 0 ; i < element.retorno.pedidos.length; i++){
                    result.push({
                        date: element.retorno.pedidos[i].pedido.data,
                        amount: element.retorno.pedidos[i].pedido.totalvenda,
                        number_orders: element.retorno.pedidos[i].pedido.numero
                    })
                }
            })
        return result
    };
    
    
}