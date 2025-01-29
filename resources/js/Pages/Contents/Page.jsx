import React, { useState } from 'react';
import { Link, usePage, router } from "@inertiajs/react";
import ContentManagementLayout from '@/Layouts/ContentManagementLayout';

const ContentManagement= ({ sizes }) => {

    return (
        <ContentManagementLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Content Management
                </h2>
            }
        >
            CMS
        </ContentManagementLayout>
    );
};

export default ContentManagement;
