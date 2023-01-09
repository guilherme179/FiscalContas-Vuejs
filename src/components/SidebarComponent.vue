<template>
  <div>
        <div className="flex flex-col h-sidebar p-3 bg-gradient-to-t from-navbar-0 to-navbar-700 text-white shadow w-60">
            <div className="space-y-3">
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-base">
                        <li className="rounded-sm">
                            <router-link
                                to="/"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-house" />
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-truck" />
                                <span>Fornecedores</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="/clients"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-person" />
                                <span>Clientes</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-boxes-stacked" />
                                <span>Estoque</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-dolly" />
                                <span>Entrada</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-truck-ramp-box" />
                                <span>Saída</span>
                            </router-link>
                        </li>
                        <li className="rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-file-invoice-dollar" />
                                <span>Boletos à pagar</span>
                            </router-link>
                        </li>
                        <li className="text-gray-200 rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-receipt" />
                                <span>Boletos à receber</span>
                            </router-link>
                        </li>
                        <li className="text-gray-500 rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-building-columns" />
                                <span>Extrato bancário</span>
                            </router-link>
                        </li>
                        <li className="text-gray-500 rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-money-bill-1-wave" />
                                <span>Extrato dinheiro</span>
                            </router-link>
                        </li>
                        <li className="text-gray-600 rounded-sm">
                            <router-link
                                to="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
                                <span>Despesas</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'SidebarComponent'
}
</script>
