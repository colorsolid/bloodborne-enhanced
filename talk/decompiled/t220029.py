# -*- coding: utf-8 -*-
def t220029_0():
    """State 0,1"""
    t220029_x1()
    Quit()

# portable lamp

def t220029_x0():
    """State 0,1"""
    assert t220029_x7(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t220029_x1():
    """State 0"""
    while True:
        """State 2"""
        DebugEvent('Beacon warp chair non-multi medium')
        call = t220029_x3()
    """Unused"""
    """State 4"""
    return 0

def t220029_x3():
    """State 0"""
    while True:
        """State 2"""
        Label('L0')
        DebugEvent('Operation status Not multi')
        ClearPlayerDamageInfo()
        SetTalkTime(0.33)
        if False:
            return 0
        elif GetEventStatus(12421900) == 1: # portable lamp
            """State 6"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            call = t220029_x60()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                assert t220029_x0()
        elif GetEventStatus(12421902) == 1: # portable lamp - double tap - warp menu
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            call = t220029_x50()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                assert t220029_x0()
        elif GetEventStatus(12421903) == 1: # portable lamp - double tap - hunter's dream
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            call = t220029_x4()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                assert t220029_x0()
        elif GetEventStatus(12421904) == 1: # portable lamp - double tap - reawaken
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            call = t220029_x40()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                assert t220029_x0()
        elif GetEventStatus(12421901) == 1: # grand res bell
            """State 7"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            if GetEventStatus(8631) == 0 and GetEventStatus(8641) == 0:
                OpenGenericDialog(1, 200238, 1, 0, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                if GetGenericDialogButtonResult() == 1:
                    DebugEvent('OK')
                    pass
                elif not IsGenericDialogOpen():
                    DebugEvent('CANCEL')
                    pass
            else:
                call = t220029_x41()
                if call.Done():
                    pass
                elif HasPlayerBeenAttacked() == 1:
                    assert t220029_x0()
    """Unused"""
    """State 9"""
    return 0

def t220029_x4():
    """State 0,5"""
    if True:
        """State 1"""
        OpenGenericDialog(2, 10010713, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            """State 3"""
            DebugEvent('OK')
            """State 6"""
            call = t220029_x21()
            if call.Get() == 1:
                pass
        elif not IsGenericDialogOpen():
            """State 2"""
            DebugEvent('CANCEL')
            return 1
    else:
        """State 4"""
        OpenGenericDialog(7, 10010715, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 7"""
    return 0

def t220029_x6(flag3=241, flag4=0, z5=0):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000100 + flag4 * 1, 1)
    """State 2"""
    return 0

def t220029_x7(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('Conversation judgment')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('General-purpose dialog judgment')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('Menu judgment')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) == 1 or CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z4, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

# 12100980 - warp
# 12100979 - level up
# 12100978 - workshop
# 12100977 - memory alter
# 12100976 - storage
# 12100975 - messengers
# 12100974 - change appearance
# 12100973 - auto ng+
# 12100972 - lamp mods
# 12100971 - stocked shop
# 12100970 - beast's embrace
# 12100969 - milkweed rune
# 12100968 - lamp cheat

# summons menu
def t220029_x41():
    while True:
        ClearTalkListData()
        AddTalkListData(2, 10010567, 8641) # summon henriett
        AddTalkListData(3, 10010583, 8631) # dismiss henriett
        if (GetEventStatus(8630) == 1 or GetEventStatus(8631) == 1 or GetEventStatus(8632) == 1 or GetEventStatus(8633) == 1
                or GetEventStatus(8634) == 1 or GetEventStatus(8635) == 1 or GetEventStatus(8636) == 1
                or GetEventStatus(8637) == 1 or GetEventStatus(8638) == 1 or GetEventStatus(8639) == 1):
            AddTalkListData(1, 200236, -1) # gather summons
        else:
            pass
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # gather summons
            SetEventState(12106500, 1)
            return 1
        elif GetTalkListEntryResult() == 2: # summon henriett
            SetEventState(8631, 1)
            return 1
        elif GetTalkListEntryResult() == 3: # dismiss henriett
            SetEventState(8631, 0)
            return 1

# top level
def t220029_x60():
    """State 0,6"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 200001, 12100881)
        AddTalkListData(2, 70002100, 12100981)
        AddTalkListData(3, 15000100, 12100882)
        AddTalkListData(4, 70000001, 12100883)
        AddTalkListData(5, 70000008, 12100884)
        AddTalkListData(6, 70000000, 12100885)
        AddTalkListData(7, 200003, 12100886)
        AddTalkListData(8, 200004, 12100887)
        AddTalkListData(9, 200012, 12100888) # enhanced features
        """State 2"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            """State 3"""
            ForceCloseMenu()
            break
        # warp
        elif GetTalkListEntryResult() == 1:
            """State 30"""
            call = t220029_x50()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 34"""
                return 0
        # hunter's dream if warp menu disabled
        elif GetTalkListEntryResult() == 2:
            call = t220029_x4()
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                ForceCloseGenericDialog()
                pass
        # level up
        elif GetTalkListEntryResult() == 3:
            """State 126"""
            if GetEventStatus(6700) == 1:
                pass
            else:
                """State 127"""
                OpenGenericDialog(1, 10011000, 1, 0, 1)
                """State 128"""
                SetEventState(6700, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            """State 130"""
            OpenSoul()
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(23, 0)
        # workshop
        elif GetTalkListEntryResult() == 4:
            """State 135"""
            call = t220029_x70()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 136"""
                return 0
        # memory alter
        elif GetTalkListEntryResult() == 5:
            """State 160"""
            if ComparePlayerInventoryNumber(3, 4104, 0, 1, 0) == 1:
                """State 161"""
                SetEventState(72100202, 1)
                """State 162"""
                DebugEvent('Body gem detachable')
                if GetEventStatus(6705) == 1:
                    pass
                else:
                    """State 163"""
                    OpenGenericDialog(1, 10011080, 1, 0, 1)
                    """State 164"""
                    SetEventState(6705, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    assert not IsGenericDialogOpen()
                """State 165"""
                c1_75()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(1001, 0)
            else:
                """State 166"""
                OpenGenericDialog(7, 10011070, 1, 0, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
        # storage
        elif GetTalkListEntryResult() == 6:
            """State 125"""
            if GetEventStatus(6701) == 1:
                pass
            else:
                """State 131"""
                OpenGenericDialog(1, 10011020, 1, 0, 1)
                """State 132"""
                SetEventState(6701, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            """State 133"""
            OpenRepository()
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(200, 0)
        # messengers
        elif GetTalkListEntryResult() == 7:
            """State 211"""
            call = t220029_x90()
            if call.Done():
                pass
        # change appearance
        elif GetTalkListEntryResult() == 8:
            """State 212"""
            call = t220029_x110()
            if call.Done():
                pass
        # enhanced features
        elif GetTalkListEntryResult() == 9:
            call = t220029_x94()
            if call.Get() == 1:
                ForceCloseMenu()
                continue
            elif call.Done():
                pass
    return 0

# warp menu
def t220029_x50():
    """State 0"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        AddTalkListData(1, 200010, -1)
        if GetEventStatus(12100857) == 1 and ((GetEventStatus(12201802) == 1 and GetEventStatus(12201800) == 0)):
            AddTalkListData(2, 200131, -1)
        else:
            pass
        AddTalkListData(6, 200002, -1)
        AddTalkListData(49, 200005, -1)
        AddTalkListData(50, 70002100, -1)
        """State 3"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            """State 4"""
            return 1
        # awaken above ground
        elif GetTalkListEntryResult() == 1:
            call = t220029_x49()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # quick warp to boss
        elif GetTalkListEntryResult() == 2:
            call = t220029_x48()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # chalice dungeons
        elif GetTalkListEntryResult() == 6:
            """State 20"""
            call = t220029_x115()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 21"""
                return 0
        # reawaken
        elif GetTalkListEntryResult() == 49:
            """State 15"""
            call = t220029_x40()
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                ForceCloseGenericDialog()
                pass
        # hunter's dream
        elif GetTalkListEntryResult() == 50:
            """State 17"""
            call = t220029_x4()
            # call = t220029_x4(flag3=241, flag4=0, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                # ForceCloseGenericDialog()
                return 0
        
# quick warp to boss
def t220029_x48():
    while True:
        ClearTalkListData()
        if GetEventStatus(12201802) == 1 and GetEventStatus(12201800) == 0:
            AddTalkListData(1, 200049, -1)
        else:
            pass
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1:
            SetEventState(12201899, 1)
            return 0

# awaken above ground
def t220029_x49():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 70010100, 12105030)
        AddTalkListData(2, 70010101, 12105031)
        AddTalkListData(3, 70010102, 12105032)
        AddTalkListData(4, 70010103, 12105033)
        AddTalkListData(5, 70010104, 12105034)
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        # yharnam headstone
        elif GetTalkListEntryResult() == 1:
            call = t220029_x51()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # frontier headstone
        elif GetTalkListEntryResult() == 2:
            call = t220029_x52()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # unseen headstone
        elif GetTalkListEntryResult() == 3:
            call = t220029_x53()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # nightmare headstone
        elif GetTalkListEntryResult() == 4:
            call = t220029_x54()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # hunter's nightmare
        elif GetTalkListEntryResult() == 5:
            call = t220029_x55()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0

# reawaken
def t220029_x20():
    """State 0,3"""
    DebugEvent('Flag judgment')
    SetEventState(8615, 1)
    return 0
    
def t220029_x21(flag1=999, flag2=999, flag3=999, flag4=999, flag5=999):
    if flag1 == 8607 and flag2 == 999 and flag3 == 999 and flag4 == 999 and flag5 == 999:
        if not GetEventStatus(70002413):
            SetEventState(72102413, 1)
        else:
            OpenGenericDialog(1, 10010720, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    elif flag1 == 8607 and flag2 == 8608 and flag3 == 999 and flag4 == 999 and flag5 == 999:
        if not GetEventStatus(70002401):
            SetEventState(72102401, 1)
        else:
            OpenGenericDialog(1, 10010720, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    elif flag1 == 8605 and flag2 == 8607 and flag3 == 8608 and flag4 == 999 and flag5 == 999:
        if not GetEventStatus(70002802):
            SetEventState(72102802, 1)
        else:
            OpenGenericDialog(1, 10010720, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    else:
        pass
    SetEventState(flag1, 1)
    SetEventState(flag2, 1)
    SetEventState(flag3, 1)
    SetEventState(flag4, 1)
    SetEventState(flag5, 1)

    SetEventState(8603, 1)

    return 0

# reawaken dialogue
def t220029_x40():
    """State 0,5"""
    if not GetEventStatus(70010000):
        """State 1"""
        OpenGenericDialog(2, 10010710, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            """State 3"""
            DebugEvent('OK')
            """State 6"""
            call = t220029_x20()
            if call.Get() == 1:
                pass
        elif not IsGenericDialogOpen():
            """State 2"""
            DebugEvent('CANCEL')
    else:
        """State 4"""
        OpenGenericDialog(7, 10010715, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 7"""
    return 0

# yharnam headstone
def t220029_x51():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 241 * 10 + 0, 10000000 + 241 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 241 * 10 + 1, 10000000 + 241 * 10000 + 7810 + 20 * 1)
        AddTalkListData(3, 70000000 + 241 * 10 + 2, 10000000 + 241 * 10000 + 7810 + 20 * 2)
        AddTalkListData(4, 70000000 + 241 * 10 + 3, 10000000 + 241 * 10000 + 7810 + 20 * 3)
        AddTalkListData(5, 70000000 + 240 * 10 + 0, 10000000 + 240 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 240 * 10 + 1, 10000000 + 240 * 10000 + 7810 + 20 * 1)
        AddTalkListData(7, 70000000 + 242 * 10 + 0, 10000000 + 242 * 10000 + 7810 + 20 * 0)
        AddTalkListData(8, 70000000 + 242 * 10 + 2, 10000000 + 242 * 10000 + 7810 + 20 * 2)
        AddTalkListData(9, 70000000 + 242 * 10 + 1, 10000000 + 242 * 10000 + 7810 + 20 * 1)
        AddTalkListData(10, 70000000 + 230 * 10 + 0, 10000000 + 230 * 10000 + 7810 + 20 * 0)
        AddTalkListData(11, 70000000 + 230 * 10 + 1, 10000000 + 230 * 10000 + 7810 + 20 * 1)
        AddTalkListData(12, 70000000 + 230 * 10 + 2, 10000000 + 230 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t220029_x21(flag1=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t220029_x21(flag1=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t220029_x21(flag1=8608, flag2=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t220029_x21(flag1=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t220029_x21(flag1=8607, flag2=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t220029_x21(flag1=8607, flag2=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t220029_x21(flag1=8607, flag2=8608, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t220029_x21(flag1=8606)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0
        elif GetTalkListEntryResult() == 9:
            """State 23"""
            call = t220029_x21(flag1=8606, flag2=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 24"""
                return 0
        elif GetTalkListEntryResult() == 10:
            """State 25"""
            call = t220029_x21(flag1=8606, flag2=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 26"""
                return 0
        elif GetTalkListEntryResult() == 11:
            """State 27"""
            call = t220029_x21(flag1=8606, flag2=8608, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 28"""
                return 0
        elif GetTalkListEntryResult() == 12:
            """State 29"""
            call = t220029_x21(flag1=8606, flag2=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 30"""
                return 0

# frontier headstone
def t220029_x52():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 220 * 10 + 0, 10000000 + 220 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 220 * 10 + 1, 10000000 + 220 * 10000 + 7810 + 20 * 1)
        AddTalkListData(3, 70000000 + 270 * 10 + 0, 10000000 + 270 * 10000 + 7810 + 20 * 0)
        AddTalkListData(4, 70000000 + 270 * 10 + 1, 10000000 + 270 * 10000 + 7810 + 20 * 1)
        AddTalkListData(5, 70000000 + 320 * 10 + 0, 10000000 + 320 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 320 * 10 + 2, 10000000 + 320 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t220029_x21(flag1=8606, flag2=8607, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t220029_x21(flag1=8606, flag2=8607, flag3=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t220029_x21(flag1=8606, flag2=8607, flag3=8608, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t220029_x21(flag1=8605)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t220029_x21(flag1=8605, flag2=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t220029_x21(flag1=8605, flag2=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0

# unseen headstone
def t220029_x53():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 280 * 10 + 0, 10000000 + 280 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 280 * 10 + 3, 10000000 + 280 * 10000 + 7810 + 20 * 3)
        AddTalkListData(3, 70000000 + 280 * 10 + 1, 10000000 + 280 * 10000 + 7810 + 20 * 1)
        AddTalkListData(4, 70000000 + 280 * 10 + 2, 10000000 + 280 * 10000 + 7810 + 20 * 2)
        AddTalkListData(5, 70000000 + 250 * 10 + 0, 10000000 + 250 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 250 * 10 + 2, 10000000 + 250 * 10000 + 7810 + 20 * 2)
        AddTalkListData(7, 70000000 + 250 * 10 + 1, 10000000 + 250 * 10000 + 7810 + 20 * 1)
        AddTalkListData(8, 70000000 + 211 * 10 + 0, 10000000 + 211 * 10000 + 7810 + 20 * 0)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t220029_x21(flag1=8605, flag2=8608, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t220029_x21(flag1=8605, flag2=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t220029_x21(flag1=8605, flag2=8607, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t220029_x21(flag1=8605, flag2=8607, flag3=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t220029_x21(flag1=8605, flag2=8607, flag3=8608, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t220029_x21(flag1=8605, flag2=8606)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0

# nightmare headstone
def t220029_x54():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 320 * 10 + 1, 10000000 + 320 * 10000 + 7810 + 20 * 1)
        AddTalkListData(2, 70000000 + 320 * 10 + 3, 10000000 + 320 * 10000 + 7810 + 20 * 3)
        AddTalkListData(3, 70000000 + 330 * 10 + 0, 10000000 + 330 * 10000 + 7810 + 20 * 0)
        AddTalkListData(4, 70000000 + 330 * 10 + 1, 10000000 + 330 * 10000 + 7810 + 20 * 1)
        AddTalkListData(5, 70000000 + 260 * 10 + 0, 10000000 + 260 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 260 * 10 + 3, 10000000 + 260 * 10000 + 7810 + 20 * 3)
        AddTalkListData(7, 70000000 + 260 * 10 + 2, 10000000 + 260 * 10000 + 7810 + 20 * 2)
        AddTalkListData(8, 70000000 + 260 * 10 + 1, 10000000 + 260 * 10000 + 7810 + 20 * 1)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8608, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8607, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8607, flag4=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t220029_x21(flag1=8605, flag2=8606, flag3=8607, flag4=8608, flag5=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t220029_x21(flag1=8604)
            if call.Done():
                """State 18"""
                return 0
            elif call.Get() == 1:
                pass
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t220029_x21(flag1=8604, flag2=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t220029_x21(flag1=8604, flag2=8608)
            if call.Done():
                """State 22"""
                return 0
            elif call.Get() == 1:
                pass

# hunter's nightmare headstone
def t220029_x55():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(9, 70000000 + 340 * 10 + 0, 10000000 + 340 * 10000 + 7810 + 20 * 0)
        AddTalkListData(10, 70000000 + 340 * 10 + 1, 10000000 + 340 * 10000 + 7810 + 20 * 1)
        AddTalkListData(12, 70000000 + 340 * 10 + 3, 10000000 + 340 * 10000 + 7810 + 20 * 3)
        AddTalkListData(11, 70000000 + 340 * 10 + 2, 10000000 + 340 * 10000 + 7810 + 20 * 2)
        AddTalkListData(13, 70000000 + 350 * 10 + 0, 10000000 + 350 * 10000 + 7810 + 20 * 0)
        AddTalkListData(14, 70000000 + 350 * 10 + 1, 10000000 + 350 * 10000 + 7810 + 20 * 1)
        AddTalkListData(15, 70000000 + 350 * 10 + 2, 10000000 + 350 * 10000 + 7810 + 20 * 2)
        AddTalkListData(16, 70000000 + 360 * 10 + 0, 10000000 + 360 * 10000 + 7810 + 20 * 0)
        AddTalkListData(17, 70000000 + 360 * 10 + 1, 10000000 + 360 * 10000 + 7810 + 20 * 1)
        AddTalkListData(18, 70000000 + 360 * 10 + 2, 10000000 + 360 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 9:
            """State 7"""
            call = t220029_x21(flag1=8604, flag2=8608, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 10:
            """State 9"""
            call = t220029_x21(flag1=8604, flag2=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 12:
            """State 11"""
            call = t220029_x21(flag1=8604, flag2=8607, flag3=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 11:
            """State 13"""
            call = t220029_x21(flag1=8604, flag2=8607, flag3=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 13:
            """State 15"""
            call = t220029_x21(flag1=8604, flag2=8607, flag3=8608, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 14:
            """State 17"""
            call = t220029_x21(flag1=8604, flag2=8606)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 15:
            """State 19"""
            assert t220029_x21(flag1=8604, flag2=8606, flag3=8609)
            """State 20"""
            return 0
        elif GetTalkListEntryResult() == 16:
            """State 21"""
            call = t220029_x21(flag1=8604, flag2=8606, flag3=8608)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0
        elif GetTalkListEntryResult() == 17:
            """State 23"""
            call = t220029_x21(flag1=8604, flag2=8606, flag3=8608, flag4=8609)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 24"""
                return 0
        elif GetTalkListEntryResult() == 18:
            """State 25"""
            call = t220029_x21(flag1=8604, flag2=8606, flag3=8607)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 26"""
                return 0

# chalices
def t220029_x115():
    """State 0"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        AddTalkListData(1, 70010220, -1)
        AddTalkListData(2, 70010221, -1)
        AddTalkListData(3, 70010222, -1)
        AddTalkListData(4, 70010223, -1)
        AddTalkListData(5, 70010224, -1)
        AddTalkListData(6, 70010225, -1)
        """State 3"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            """State 4"""
            return 1
        # first alter
        elif GetTalkListEntryResult() == 1:
            """State 5"""
            call = t220029_x135(flag1=72100475, flag2=1, actionbutton1=6116, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 6"""
                return 0
        # second alter
        elif GetTalkListEntryResult() == 2:
            """State 7"""
            call = t220029_x135(flag1=72100476, flag2=2, actionbutton1=6117, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 8"""
                return 0
        # third alter
        elif GetTalkListEntryResult() == 3:
            """State 9"""
            call = t220029_x135(flag1=72100477, flag2=3, actionbutton1=6118, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 10"""
                return 0
        # fourth alter
        elif GetTalkListEntryResult() == 4:
            """State 11"""
            call = t220029_x135(flag1=72100478, flag2=4, actionbutton1=6119, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 12"""
                return 0
        # fifth alter
        elif GetTalkListEntryResult() == 5:
            """State 13"""
            call = t220029_x135(flag1=72100479, flag2=5, actionbutton1=6120, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 14"""
                return 0
        # final alter
        elif GetTalkListEntryResult() == 6:
            """State 15"""
            call = t220029_x135(flag1=72100480, flag2=6, actionbutton1=6121, action1=10011120, action2=10011130)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                """State 16"""
                return 0

def t220029_x130():
    """State 0,1"""
    assert t220029_x131(z2=99999, z3=99999, z4=99999, z5=99999)
    """State 2"""
    return 0

def t220029_x131(z2=99999, z3=99999, z4=99999, z5=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3, 0) == 1 or CheckSpecificPersonMenuIsOpen(z4,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z5, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t220029_x132(actionbutton1=6116, flag3=6000, flag4=6001, flag5=6001, flag6=6001, flag7=6001, flag8=6001,
               flag9=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag3) == 1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) ==
                1 or GetEventStatus(flag6) == 1 or GetEventStatus(flag7) == 1 or GetEventStatus(flag8)
                == 1 or GetEventStatus(flag9) == 1)
        """State 2"""
        if (not GetEventStatus(flag3) and not GetEventStatus(flag4) and not GetEventStatus(flag5) and
            not GetEventStatus(flag6) and not GetEventStatus(flag7) and not GetEventStatus(flag8) and
            not GetEventStatus(flag9)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    SetTalkTime(0.5)
    return 0

def t220029_x135(flag1=72100421, flag2=1, actionbutton1=6116, action1=10011120, action2=10011130):
    """State 0"""
    while True:
        """State 1"""
        Label('L0')
        DebugEvent('待機')
        """State 10"""
        def ExitPause():
            c1_73(1)
        # assert (t220029_x132(actionbutton1=actionbutton1, flag3=6000, flag4=6001, flag5=6001, flag6=6001,
        #         flag7=6001, flag8=6001, flag9=6001))
        """State 2"""
        ClearPlayerDamageInfo()
        c1_73(1)
        """State 3"""
        c1_72(flag2)
        c1_73(1)
        """State 8"""
        call = t220029_x136(flag1=flag1, action1=action1, action2=action2, flag2=flag2)
        def WhilePaused():
            SetTalkTime(0.33)
        if call.Get() == 1:
            """State 12"""
            ClearTalkProgressData()
            StopEventAnimWithoutForcingConversationEnd(0)
            """State 13"""
            return 1
        elif call.Done():
            return 0
        elif HasPlayerBeenAttacked() == 1 or GetDistanceToPlayer() > 3:
            """State 9"""
            assert t220029_x130()
    """Unused"""
    """State 4"""
    DebugEvent('no active chair')
    c1_73(1)
    """State 5"""
    c1_79()
    assert not CheckSpecificPersonMenuIsOpen(320, 0)
    Goto('L0')
    """State 6"""
    DebugEvent('起動中の椅子が存在しない')
    """State 7"""
    OpenGenericDialog(1, 10010714, 1, 0, 1)
    assert not IsGenericDialogOpen()
    Goto('L0')
    """State 11"""
    return 0

def t220029_x136(flag1=72100421, action1=10011120, action2=10011130, flag2=1):
    """State 0,19"""
    DebugEvent('unknow')
    if (ComparePlayerInventoryNumber(3, 6100, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6109,
        0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6200, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6209, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6210, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6219, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6300, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6302, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6309, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6310, 0, 0, 0) == 1):
        """State 20"""
        DebugEvent('所持していない')
        if (ComparePlayerInventoryNumber(3, 6312, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6319,
            0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6401, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6409, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6420, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6429, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6500, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6502, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6509, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6520, 0, 0, 0) == 1):
            """State 38"""
            DebugEvent('所持していない')
            if (ComparePlayerInventoryNumber(3, 6522, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
                6529, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6530, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
                6532, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6539, 0, 0, 0) == 1):
                """State 18"""
                OpenGenericDialog(7, action1, 1, 0, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                if GetGenericDialogButtonResult() == 1:
                    return 1
                assert not IsGenericDialogOpen()
            else:
                """State 21"""
                Label('L0')
                DebugEvent('所持している')
                """State 22"""
                DebugEvent('初回起動判定')
                if GetEventStatus(6708) == 1:
                    """State 23"""
                    DebugEvent('初回起動でない')
                else:
                    """State 24"""
                    DebugEvent('初回起動')
                    """State 16"""
                    OpenGenericDialog(1, action2, 1, 0, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    """State 17"""
                    SetEventState(6708, 1)
                    assert not IsGenericDialogOpen()
                """State 1"""
                ClearTalkListData()
                SetEventState(70000230, 0)
                SetEventState(70000220 + flag2, 0)
                """State 2"""
                AddTalkListData(1, 70002900, -1)
                AddTalkListData(2, 70002901, 12907830)
                AddTalkListData(3, 70002902, 12907850)
                AddTalkListData(4, 70002903, 12907870)
                AddTalkListData(5, 70002904, 12907890)
                AddTalkListData(6, 70002905, 12907910)
                AddTalkListData(7, 70002906, 12907930)
                AddTalkListData(8, 70002907, 12907950)
                AddTalkListData(9, 70002908, 12907970)
                AddTalkListData(10, 70002909, 12907990)
                if GetEventStatus(94005001 + flag2 * 100000) == 1:
                    """State 33"""
                    SetEventState(70000231, 1)
                else:
                    """State 34"""
                    SetEventState(70000231, 0)
                """State 36"""
                c1_79()
                while True:
                    """State 3"""
                    def WhilePaused():
                        SetTalkTime(0.33)
                    if GetTalkListEntryResult() == 1:
                        """State 6"""
                        DebugEvent('ダンジョン_1F')
                        """State 39"""
                        assert t220029_x137(flag1=flag1)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 2:
                        """State 10"""
                        DebugEvent('ダンジョン_2F')
                        """State 40"""
                        assert t220029_x137(flag1=flag1, flag2=8614)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 3:
                        """State 4"""
                        DebugEvent('ダンジョン_3F')
                        """State 41"""
                        assert t220029_x137(flag1=flag1, flag2=8613)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 4:
                        """State 7"""
                        DebugEvent('ダンジョン_4F')
                        """State 42"""
                        assert t220029_x137(flag1=flag1, flag2=8613, flag3=8614)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 5:
                        """State 11"""
                        DebugEvent('ダンジョン_5F')
                        """State 43"""
                        assert t220029_x137(flag1=flag1, flag2=8612)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 6:
                        """State 8"""
                        DebugEvent('ダンジョン_6F')
                        """State 44"""
                        assert t220029_x137(flag1=flag1, flag2=8612, flag3=8614)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 7:
                        """State 9"""
                        DebugEvent('ダンジョン_7F')
                        """State 45"""
                        assert t220029_x137(flag1=flag1, flag2=8612, flag3=8613)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 8:
                        """State 12"""
                        DebugEvent('ダンジョン_8F')
                        """State 46"""
                        assert t220029_x137(flag1=flag1, flag2=8612, flag3=8613, flag4=8614)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 9:
                        """State 13"""
                        DebugEvent('ダンジョン_9F')
                        """State 47"""
                        assert t220029_x137(flag1=flag1, flag2=8611)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 10:
                        """State 14"""
                        DebugEvent('ダンジョン_10F')
                        """State 48"""
                        assert t220029_x137(flag1=flag1, z1=72100309)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 11:
                        """State 15"""
                        DebugEvent('To the warp chair in operation')
                        """State 49"""
                        assert t220029_x138(flag1=flag1)
                        Goto('L1')
                    elif (GetTalkListEntryResult() == 50 or not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(320,
                          0)):
                        return 1
                    elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + flag2 * 100000):
                        """State 35"""
                        DebugEvent('the chalice has been removed')
                        """State 37"""
                        SetEventState(70000231, 0)
                """State 5"""
                DebugEvent('walk away')
                """State 30"""
                DebugEvent('Participate in method judgment')
                if GetEventStatus(94005001 + flag2 * 100000) == 1 and not GetEventStatus(70000231):
                    """State 31"""
                    DebugEvent('設置した')
                    """State 25"""
                    DebugEvent('Participate in method judgment')
                    if GetEventStatus(70000230) == 1:
                        """State 26"""
                        DebugEvent('Join from search')
                        assert GetEventStatus(70000220 + flag2 * 1) == 1
                        """State 29"""
                        OpenGenericDialog(1, 10011302, 1, 0, 1)
                        def WhilePaused():
                            SetTalkTime(0.33)
                        assert not IsGenericDialogOpen()
                    else:
                        """State 27"""
                        DebugEvent('create and join')
                        assert GetEventStatus(70000220 + flag2 * 1) == 1
                        """State 28"""
                        OpenGenericDialog(1, 10011301, 1, 0, 1)
                        def WhilePaused():
                            SetTalkTime(0.33)
                        assert not IsGenericDialogOpen()
                else:
                    """State 32"""
                    DebugEvent('not installed')
        else:
            Goto('L0')
    else:
        Goto('L0')
    """State 50"""
    Label('L1')
    return 0

def t220029_x137(flag1=72100421, flag2=999, flag3=999, flag4=999, z1=1):
    """State 0,1"""
    SetEventState(flag1, 1)
    SetEventState(flag2, 1)
    SetEventState(flag3, 1)
    SetEventState(flag4, 1)
    SetEventState(8610, 1)
    # assert not GetEventStatus(flag1)
    """State 2"""
    # SetEventState(12108900, 1)
    # SetEventState(z1, 1)
    """State 3"""
    return 0

def t220029_x138(flag1=72100421):
    """State 0,1"""
    DebugEvent('ワープ椅子の稼動状態による分岐')
    if GetEventStatus(12907991) == 1:
        """State 11"""
        DebugEvent('ワープ椅子09')
        """State 21"""
        assert t220029_x137(flag1=flag1, z1=72100309)
    elif GetEventStatus(12907971) == 1:
        """State 10"""
        DebugEvent('ワープ椅子08')
        """State 20"""
        assert t220029_x137(flag1=flag1, z1=72100308)
    elif GetEventStatus(12907951) == 1:
        """State 9"""
        DebugEvent('ワープ椅子07')
        """State 19"""
        assert t220029_x137(flag1=flag1, z1=72100307)
    elif GetEventStatus(12907911) == 1:
        """State 5"""
        DebugEvent('ワープ椅子05')
        """State 17"""
        assert t220029_x137(flag1=flag1, z1=72100305)
    elif GetEventStatus(12907931) == 1:
        """State 6"""
        DebugEvent('ワープ椅子06')
        """State 18"""
        assert t220029_x137(flag1=flag1, z1=72100306)
    elif GetEventStatus(12907831) == 1:
        """State 7"""
        DebugEvent('ワープ椅子01')
        """State 13"""
        assert t220029_x137(flag1=flag1, z1=72100301)
    elif GetEventStatus(12907891) == 1:
        """State 8"""
        DebugEvent('ワープ椅子04')
        """State 16"""
        assert t220029_x137(flag1=flag1, z1=72100304)
    elif GetEventStatus(12907871) == 1:
        """State 4"""
        DebugEvent('ワープ椅子03')
        """State 15"""
        assert t220029_x137(flag1=flag1, z1=72100303)
    elif GetEventStatus(12907851) == 1:
        """State 2"""
        DebugEvent('ワープ椅子02')
        """State 14"""
        assert t220029_x137(flag1=flag1, z1=72100302)
    else:
        """State 3"""
        DebugEvent('ワープ椅子00')
        """State 12"""
        assert t220029_x137(flag1=flag1, z1=72100300)
    """State 22"""
    return 0

# workshop
def t220029_x70():
    """State 0"""
    if ComparePlayerInventoryNumber(3, 4103, 0, 1, 0) == 1:
        """State 136"""
        SetEventState(72100200, 1)
    else:
        pass
    """State 137"""
    if ComparePlayerInventoryNumber(3, 4102, 0, 1, 0) == 1:
        """State 138"""
        SetEventState(72100201, 1)
    else:
        pass
    while True:
        """State 139"""
        ClearTalkListData()
        if True:
            """State 140"""
            AddTalkListData(1, 15000110, -1)
            AddTalkListData(2, 15000120, -1)
            AddTalkListData(3, 15000111, 72100200)
            AddTalkListData(4, 10011050, 72100201)
            """State 141"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
                """State 142"""
                return 1
            elif GetTalkListEntryResult() == 1:
                """State 143"""
                DebugEvent('武器強化')
                if GetEventStatus(6702) == 1:
                    pass
                else:
                    """State 144"""
                    OpenGenericDialog(1, 10011030, 1, 0, 1)
                    """State 145"""
                    SetEventState(6702, 1)
                    assert not IsGenericDialogOpen()
                """State 146"""
                OpenEquipmentChangeOfPurposeShop()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(13, 0)
            elif GetTalkListEntryResult() == 2:
                """State 147"""
                DebugEvent('装備修理')
                if GetEventStatus(6703) == 1:
                    pass
                else:
                    """State 148"""
                    OpenGenericDialog(1, 10011040, 1, 0, 1)
                    """State 149"""
                    SetEventState(6703, 1)
                    assert not IsGenericDialogOpen()
                """State 150"""
                OpenRepairShop()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(12, 0)
            elif GetTalkListEntryResult() == 3:
                """State 151"""
                DebugEvent('武器魔石着脱')
                if GetEventStatus(6704) == 1:
                    pass
                else:
                    """State 152"""
                    OpenGenericDialog(1, 10011060, 1, 0, 1)
                    """State 153"""
                    SetEventState(6704, 1)
                    assert not IsGenericDialogOpen()
                """State 154"""
                SetEventState(70000100, 1)
                """State 155"""
                c1_74()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(1000, 0)
            elif GetTalkListEntryResult() == 4:
                """State 156"""
                DebugEvent('素材を砕く')
                if GetEventStatus(6719) == 1:
                    pass
                else:
                    """State 157"""
                    OpenGenericDialog(1, 10011170, 1, 0, 1)
                    """State 158"""
                    SetEventState(6719, 1)
                    assert not IsGenericDialogOpen()
                """State 159"""
                c1_87()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(380, 0)
        else:
            break
    return 0

# messengers
def t220029_x90():
    """State 0"""
    while True:
        """State 167"""
        ClearTalkListData()
        if True:
            """State 168"""
            AddTalkListData(1, 70000003, -1)
            AddTalkListData(2, 15000150, -1)
            AddTalkListData(3, 70000007, 6712)
            """State 169"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
                """State 170"""
                ForceCloseMenu()
                break
            # bath messengers
            elif GetTalkListEntryResult() == 1:
                """State 171"""
                call = t220029_x91()
                if call.Done():
                    """State 220"""
                    ForceCloseMenu()
                    pass
            # insight shop
            elif GetTalkListEntryResult() == 2:
                """State 216"""
                DebugEvent('購入')
                """State 187"""
                if GetEventStatus(12100848) == 1:
                    c1_86(200000, 200199)
                else:
                    c1_86(200000, 200099)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(370, 0)
            # stump messengers
            elif GetTalkListEntryResult() == 3:
                call = t220029_x92()
                if call.Done():
                    """State 219"""
                    ForceCloseMenu()
                    pass
        else:
            break
    return 0

# bath messengers
def t220029_x91():
    """State 0"""
    if GetEventStatus(6710) == 1:
        pass
    else:
        """State 172"""
        OpenGenericDialog(1, 10011160, 1, 0, 1)
        """State 173"""
        SetEventState(6710, 1)
        SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 174"""
        ClearTalkListData()
        """State 175"""
        AddTalkListData(1, 15000140, -1)
        AddTalkListData(2, 15000141, -1)
        AddTalkListData(3, 200036, 12100871)
        AddTalkListData(4, 200096, 12100871)
        
        # AddTalkListData(50, 15000005, -1)
        """State 176"""
        SetEventState(12105041, 1)
        """State 177"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if (not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not CheckSpecificPersonMenuIsOpen(300,
            0)):
            """State 186"""
            ForceCloseMenu()
            break
        elif GetTalkListEntryResult() == 1: # buy shop
            """State 178"""
            DebugEvent('購入')
            if GetEventStatus(6603) == 1: # ng +
                """State 179"""
                if GetEventStatus(12100848):
                    OpenRegularShop(140000, 149999)
                else:
                    OpenRegularShop(140000, 149900)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9802) == 1: # after rom
                """State 180"""
                if GetEventStatus(12100848):
                    OpenRegularShop(130000, 139999)
                else:
                    OpenRegularShop(130000, 139900)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9801) == 1: # after amelia
                """State 181"""
                if GetEventStatus(12100848):
                    OpenRegularShop(120000, 129999)
                else:
                    OpenRegularShop(120000, 129900)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9800) == 1: # after gascoigne
                """State 182"""
                if GetEventStatus(12100848):
                    OpenRegularShop(110000, 119999)
                else:
                    OpenRegularShop(110000, 119900)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            else:
                """State 183"""
                if GetEventStatus(12100848):
                    OpenRegularShop(100000, 109999)
                else:
                    OpenRegularShop(100000, 109900)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 2: # sell shop
            """State 184"""
            DebugEvent('売却')
            """State 185"""
            OpenSellShop(-1, -1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(64, 0)
        elif GetTalkListEntryResult() == 3: # stocked shop
            OpenRegularShop(170000, 179999)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 4: # specialty shop
            call = t220029_x93()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
    return 0

def t220029_x93():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200082, 12101400) # all trick weapons
        AddTalkListData(2, 200088, 12101401) # all standard trick weapons
        AddTalkListData(3, 200089, 12101402) # all uncanny trick weapons
        AddTalkListData(4, 200090, 12101403) # all lost trick weapons
        AddTalkListData(5, 200141, 12109000) # all runes
        AddTalkListData(10, 200083, 12101410) # secondary weapons
        AddTalkListData(20, 200091, 12101420) # hunter's tools
        AddTalkListData(30, 200084, 12101430) # all armors
        AddTalkListData(31, 200092, 12101431) # all head pieces
        AddTalkListData(32, 200093, 12101432) # all torse pieces
        AddTalkListData(33, 200094, 12101433) # all hand pieces
        AddTalkListData(34, 200095, 12101434) # all leg pieces
        AddTalkListData(40, 200085, 12101440) # chalices
        AddTalkListData(60, 200109, -1) # fill upgrade materials
        AddTalkListData(61, 200110, -1) # fill chalice materials
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # all trick weapons
            SetEventState(12101300, 1)
            OpenGenericDialog(1, 200097, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 2: # all standard trick weapons
            SetEventState(12101301, 1)
            OpenGenericDialog(1, 200101, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 3: # all uncanny trick weapons
            SetEventState(12101302, 1)
            OpenGenericDialog(1, 200102, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 4: # all lost trick weapons
            SetEventState(12101303, 1)
            OpenGenericDialog(1, 200103, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 5: # all runes
            SetEventState(12100005, 1)
            OpenGenericDialog(1, 200142, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 10: # all secondary weapons
            SetEventState(12101310, 1)
            OpenGenericDialog(1, 200098, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 20: # all hunter's tools
            SetEventState(12101320, 1)
            OpenGenericDialog(1, 200104, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 30: # all armors
            SetEventState(12101330, 1)
            OpenGenericDialog(1, 200099, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 31: # all head pieces
            SetEventState(12101331, 1)
            OpenGenericDialog(1, 200105, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 32: # all torse pieces
            SetEventState(12101332, 1)
            OpenGenericDialog(1, 200106, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 33: # all hand pieces
            SetEventState(12101333, 1)
            OpenGenericDialog(1, 200107, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 34: # all leg pieces
            SetEventState(12101334, 1)
            OpenGenericDialog(1, 200108, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 40: # all chalices
            SetEventState(12101340, 1)
            OpenGenericDialog(1, 200100, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 60: # fill upgrade materials
            SetEventState(12101360, 0)
            OpenGenericDialog(1, 200111, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 61: # fill chalice materials
            SetEventState(12101361, 0)
            OpenGenericDialog(1, 200112, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()

# stump messengers
def t220029_x92():
    """State 0,4"""
    ClearTalkListData()
    if GetEventStatus(12105063) == 1 and GetEventStatus(6712) == 1:
        """State 3"""
        Label('L0')
        AddTalkListData(6, 14009915, 6076)
        AddTalkListData(2, 14009911, 6072)
        AddTalkListData(7, 14009916, 6077)
        AddTalkListData(1, 14009910, 6071)
        AddTalkListData(3, 14009912, 6073)
        AddTalkListData(8, 14009917, 6078)
        AddTalkListData(4, 14009913, 6074)
        AddTalkListData(5, 14009914, 6075)
        AddTalkListData(9, 14009918, 6079)
        AddTalkListData(10, 14009919, 6080)
        AddTalkListData(11, 14009920, 6081)
        AddTalkListData(12, 14009921, 6082)
        AddTalkListData(13, 14009922, 6083)
        AddTalkListData(14, 14009923, 6084)
        AddTalkListData(15, 14009924, 6085)
        AddTalkListData(17, 14009925, -1)
        AddTalkListData(16, 15000005, -1)
        """State 1"""
        ShowShopMessage(0, 0, 0)
        SetEventState(6712, 1)
        if GetTalkListEntryResult() == 17:
            """State 5"""
            SetEventState(72100140, 1)
        elif GetTalkListEntryResult() == 1:
            """State 6"""
            SetEventState(72100141, 1)
        elif GetTalkListEntryResult() == 2:
            """State 7"""
            SetEventState(72100142, 1)
        elif GetTalkListEntryResult() == 3:
            """State 8"""
            SetEventState(72100143, 1)
        elif GetTalkListEntryResult() == 4:
            """State 9"""
            SetEventState(72100144, 1)
        elif GetTalkListEntryResult() == 5:
            """State 10"""
            SetEventState(72100145, 1)
        elif GetTalkListEntryResult() == 6:
            """State 11"""
            SetEventState(72100146, 1)
        elif GetTalkListEntryResult() == 7:
            """State 12"""
            SetEventState(72100147, 1)
        elif GetTalkListEntryResult() == 8:
            """State 13"""
            SetEventState(72100148, 1)
        elif GetTalkListEntryResult() == 9:
            """State 14"""
            SetEventState(72100149, 1)
        elif GetTalkListEntryResult() == 10:
            """State 15"""
            SetEventState(72100150, 1)
        elif GetTalkListEntryResult() == 11:
            """State 16"""
            SetEventState(72100151, 1)
        elif GetTalkListEntryResult() == 12:
            """State 17"""
            SetEventState(72100152, 1)
        elif GetTalkListEntryResult() == 13:
            """State 18"""
            SetEventState(72100153, 1)
        elif GetTalkListEntryResult() == 14:
            """State 19"""
            SetEventState(72100154, 1)
        elif GetTalkListEntryResult() == 15:
            """State 20"""
            SetEventState(72100155, 1)
        elif (GetTalkListEntryResult() == 16 or not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(300,
              0)):
            """State 2"""
            DebugEvent('教えないorキャンセル')
    elif GetEventStatus(12105063) == 1:
        """State 23"""
        OpenGenericDialog(1, 10011210, 1, 0, 1)
        """State 24"""
        SetEventState(6712, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        Goto('L0')
    else:
        """State 22"""
        OpenGenericDialog(7, 10011200, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 21"""
    DebugEvent('待機')
    assert not GetEventStatus(12105061)
    """State 25"""
    return 0

# change appearance
def t220029_x110():
    """State 0"""
    if GetEventStatus(6706) == 1:
        pass
    else:
        """State 2"""
        OpenGenericDialog(1, 10011090, 1, 0, 1)
        """State 3"""
        SetEventState(6706, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 1"""
    OpenCharaMakeMenu()
    def WhilePaused():
        SetTalkTime(0.33)
    """State 4"""
    return 0

# mod settings
def t220029_x94():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200031, -1) # lamp settings
        AddTalkListData(2, 200086, -1) # broken lamp
        AddTalkListData(3, 200235, -1) # prime hunter's mark
        AddTalkListData(7, 200174, -1) # balancing
        AddTalkListData(8, 200200, -1) # respec
        AddTalkListData(9, 200228, 9462) # dream states
        AddTalkListData(10, 200032, -1) # misc settings
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # lamp settings
            call = t220029_x95()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 2: # broken lamp
            call = t220029_x96()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 3: # portable lamp
            call = t220029_x106()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 7: # balancing/difficulty
            call = t220029_x97()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 8: # respec
            call = t220029_x103()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 9: # dream states
            call = t220029_x98()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 10: # misc settings
            call = t220029_x99()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# lamp settings
def t220029_x95():
    while True:
        ClearTalkListData()

        # lamp deactivation
        AddTalkListData(1, 200039, 12100968)
        AddTalkListData(2, 200040, 12100868)

        # auto restock
        AddTalkListData(3, 200076, 12100962)
        AddTalkListData(4, 200077, 12100862)

        if GetEventStatus(12100862) == 1:
            AddTalkListData(35, 200172, 12100951) # disabled - enable lamp kindling
            AddTalkListData(36, 200173, 12100851) # enabled - disable lamp kindling
        else:
            pass

        # lamp menu
        AddTalkListData(13, 200029, 12100972)
        AddTalkListData(14, 200030, 12100872)

        if GetEventStatus(12100872) == 1:
            # rest
            AddTalkListData(7, 200078, 12100961)
            AddTalkListData(8, 200079, 12100861)

            # auto rest
            if GetEventStatus(12100861):
                AddTalkListData(9, 200116, 12100958)
                AddTalkListData(10, 200117, 12100858)
            else:
                pass

            # warp
            AddTalkListData(15, 200014, 12100880)
            AddTalkListData(16, 200013, 12100980)

            # level up
            AddTalkListData(17, 200016, 12100879)
            AddTalkListData(18, 200015, 12100979)

            # workshop
            AddTalkListData(19, 200018, 12100878)
            AddTalkListData(20, 200017, 12100978)

            # memory alter
            AddTalkListData(21, 200020, 12100877)
            AddTalkListData(22, 200019, 12100977)

            # storage
            AddTalkListData(23, 200022, 12100876)
            AddTalkListData(24, 200021, 12100976)

            # messengers
            AddTalkListData(25, 200024, 12100875)
            AddTalkListData(26, 200023, 12100975)

            # change appearance
            AddTalkListData(27, 200026, 12100874)
            AddTalkListData(28, 200025, 12100974)

            # rematch bosses
            AddTalkListData(29, 200044, 12100867)
            AddTalkListData(30, 200043, 12100967)

            # quick warp to boss
            AddTalkListData(31, 200133, 12100857)
            AddTalkListData(32, 200132, 12100957)
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent lamp deactivation
            SetEventState(12100968, 0)
            SetEventState(12100868, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent lamp deactivation
            SetEventState(12100968, 1)
            SetEventState(12100868, 0)
        elif GetTalkListEntryResult() == 3: # enable - auto restock
            SetEventState(12100962, 0)
            SetEventState(12100862, 1)
        elif GetTalkListEntryResult() == 4: # disable - auto restock
            SetEventState(12100962, 1)
            SetEventState(12100862, 0)
        elif GetTalkListEntryResult() == 5: # enable - drop hunt
            SetEventState(12100955, 0)
            SetEventState(12100855, 1)
        elif GetTalkListEntryResult() == 6: # disable - drop hunt
            SetEventState(12100955, 1)
            SetEventState(12100855, 0)
        elif GetTalkListEntryResult() == 7: # enable - resting
            SetEventState(12100961, 0)
            SetEventState(12100861, 1)
        elif GetTalkListEntryResult() == 8: # disable - resting
            SetEventState(12100961, 1)
            SetEventState(12100861, 0)
        elif GetTalkListEntryResult() == 9: # enable - auto resting
            SetEventState(12100958, 0)
            SetEventState(12100858, 1)
        elif GetTalkListEntryResult() == 10: # disable - auto resting
            SetEventState(12100958, 1)
            SetEventState(12100858, 0)
        elif GetTalkListEntryResult() == 13: # enable - lamp menu
            SetEventState(12100972, 0)
            SetEventState(12100872, 1)
        elif GetTalkListEntryResult() == 14: # disable - lamp menu
            SetEventState(12100972, 1)
            SetEventState(12100872, 0)
        elif GetTalkListEntryResult() == 15: # disable - warp menu
            SetEventState(12100980, 1)
            SetEventState(12100880, 0)
        elif GetTalkListEntryResult() == 16: # enable - warp menu
            SetEventState(12100980, 0)
            SetEventState(12100880, 1)
        elif GetTalkListEntryResult() == 17: # disable - level up
            SetEventState(12100979, 1)
            SetEventState(12100879, 0)
        elif GetTalkListEntryResult() == 18: # enable - level up
            SetEventState(12100979, 0)
            SetEventState(12100879, 1)
        elif GetTalkListEntryResult() == 19: # disable - workshop
            SetEventState(12100978, 1)
            SetEventState(12100878, 0)
        elif GetTalkListEntryResult() == 20: # enable - workshop
            SetEventState(12100978, 0)
            SetEventState(12100878, 1)
        elif GetTalkListEntryResult() == 21: # disable - memory alter
            SetEventState(12100977, 1)
            SetEventState(12100877, 0)
        elif GetTalkListEntryResult() == 22: # enable - memory alter
            SetEventState(12100977, 0)
            SetEventState(12100877, 1)
        elif GetTalkListEntryResult() == 23: # disable - storage
            SetEventState(12100976, 1)
            SetEventState(12100876, 0)
        elif GetTalkListEntryResult() == 24: # enable - storage
            SetEventState(12100976, 0)
            SetEventState(12100876, 1)
        elif GetTalkListEntryResult() == 25: # disable - messengers
            SetEventState(12100975, 1)
            SetEventState(12100875, 0)
        elif GetTalkListEntryResult() == 26: # enable - messengers
            SetEventState(12100975, 0)
            SetEventState(12100875, 1)
        elif GetTalkListEntryResult() == 27: # disable - change appearance
            SetEventState(12100974, 1)
            SetEventState(12100874, 0)
        elif GetTalkListEntryResult() == 28: # enable - change appearance
            SetEventState(12100974, 0)
            SetEventState(12100874, 1)
        elif GetTalkListEntryResult() == 29: # disable - boss rematches
            SetEventState(12100967, 1)
            SetEventState(12100867, 0)
        elif GetTalkListEntryResult() == 30: # enable - boss rematches
            SetEventState(12100967, 0)
            SetEventState(12100867, 1)
        elif GetTalkListEntryResult() == 31: # disable - quick warp to boss
            SetEventState(12100957, 1)
            SetEventState(12100857, 0)
        elif GetTalkListEntryResult() == 32: # enable - quick warp to boss
            SetEventState(12100957, 0)
            SetEventState(12100857, 1)
        elif GetTalkListEntryResult() == 35: # enable - lamp kindling
            SetEventState(12100951, 0)
            SetEventState(8413, 1)
            SetEventState(12100851, 1)
        elif GetTalkListEntryResult() == 36: # disable - lamp kindling
            SetEventState(12100951, 1)
            SetEventState(12100851, 0)

# broken lamp settings
def t220029_x96():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200070, 12100965) # enable - broken lamp
        AddTalkListData(2, 200071, 12100865) # disable - broken lamp

        if GetEventStatus(12100865) == 1:
            AddTalkListData(5, 200074, 12100963) # lamp - victory respawn location
            AddTalkListData(6, 200075, 12100863) # dream - victory respawn location

            AddTalkListData(7, 200114, 12100959) # lamp - death respawn location
            AddTalkListData(8, 200115, 12100859) # dream - death respawn location
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - broken lamp
            SetEventState(12100965, 0)
            SetEventState(12100865, 1)
        elif GetTalkListEntryResult() == 2: # disable - broken lamp
            SetEventState(12100965, 1)
            SetEventState(12100865, 0)
        elif GetTalkListEntryResult() == 5: # lamp - victory respawn location
            SetEventState(12100963, 0)
            SetEventState(12100863, 1)
        elif GetTalkListEntryResult() == 6: # dream - victory respawn location
            SetEventState(12100963, 1)
            SetEventState(12100863, 0)
        elif GetTalkListEntryResult() == 7: # lamp - death respawn location
            SetEventState(12100959, 0)
            SetEventState(12100859, 1)
        elif GetTalkListEntryResult() == 8: # dream - death respawn location
            SetEventState(12100959, 1)
            SetEventState(12100859, 0)

# balance/difficulty settings
def t220029_x97():
    while True:
        ClearTalkListData()

        AddTalkListData(7, 200277, -1) # summoning

        AddTalkListData(1, 200164, 12100952) # enable - rematch scaling
        AddTalkListData(2, 200165, 12100852) # disable - rematch scaling

        AddTalkListData(20, 200145, 12102010) # increase cycle

        AddTalkListData(3, 200161, 12102033) # random spawn enabled - switch to random time
        AddTalkListData(4, 200166, 12102036) # random time enabled - switch to none
        AddTalkListData(5, 200162, 12102034) # none enabled - switch to dark fog
        AddTalkListData(6, 200163, 12102035) # dark fog enabled - switch to random spawn

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 7: # summoning
            call = t220029_x107()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 1: # enable - rematch scaling
            SetEventState(12100952, 0)
            SetEventState(12100852, 1)
        elif GetTalkListEntryResult() == 2: # disable - rematch scaling
            SetEventState(12100952, 1)
            SetEventState(12100852, 0)
        elif GetTalkListEntryResult() == 3: # switch from random spawn to random time
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 0)
            SetEventState(12102035, 0)
            SetEventState(12102036, 1)
        elif GetTalkListEntryResult() == 4: # switch from random time to no effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 1)
            SetEventState(12102035, 0)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 5: # switch from no effect to dark fog
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 0)
            SetEventState(12102035, 1)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 6: # switch from dark fog to random effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 1)
            SetEventState(12102034, 0)
            SetEventState(12102035, 0)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 20: # increase cycle
            call = t220029_x100()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# dream states
def t220029_x98():
    while True:
        ClearTalkListData()

        AddTalkListData(1, 200223, 12103900) # fire enabled - switch to no fire
        AddTalkListData(2, 200224, 12103901) # no fire enabled - switch to fire

        AddTalkListData(3, 200225, 12103903) # default enabled -  switch to version 1
        AddTalkListData(4, 200226, 12103904) # version 1 enabled - switch to version 2
        AddTalkListData(5, 200227, 12103905) # version 2 enabled - switch to default

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # fire enabled -  switch to no fire
            SetEventState(12103899, 1)
            SetEventState(12103900, 0)
            SetEventState(12103901, 1)
        elif GetTalkListEntryResult() == 2: # no fire enabled - switch to fire
            SetEventState(12103899, 1)
            SetEventState(12103900, 1)
            SetEventState(12103901, 0)
        elif GetTalkListEntryResult() == 3: # no music enabled - switch to version 1
            SetEventState(12103902, 1)
            SetEventState(12103903, 0)
            SetEventState(12103904, 1)
            SetEventState(12103905, 0)
        elif GetTalkListEntryResult() == 4: # version 1 enabled - switch to version 2
            SetEventState(12103902, 1)
            SetEventState(12103903, 0)
            SetEventState(12103904, 0)
            SetEventState(12103905, 1)
        elif GetTalkListEntryResult() == 5: # version 2 enabled - switch to no music
            SetEventState(12103902, 1)
            SetEventState(12103903, 1)
            SetEventState(12103904, 0)
            SetEventState(12103905, 0)

# misc settings
def t220029_x99():
    while True:
        ClearTalkListData()
        # prevent auto ng+
        AddTalkListData(1, 200028, 12100973)
        AddTalkListData(2, 200027, 12100873)

        # stocked shop
        AddTalkListData(3, 200033, 12100971)
        AddTalkListData(4, 200034, 12100871)

        AddTalkListData(5, 200229, 12100948)
        AddTalkListData(6, 200230, 12100848)

        if GetEventStatus(12100865) == 1 or GetEventStatus(12100867) == 1:
            # auto rematch
            AddTalkListData(7, 200072, 12100964)
            AddTalkListData(8, 200073, 12100864)

            # rematch cutscenes
            AddTalkListData(9, 200067, 12100966)
            AddTalkListData(10, 200068, 12100866)
        else:
            pass

        # unlocked chalice dungeons
        AddTalkListData(11, 200080, 12100960)
        AddTalkListData(12, 200081, 12100860)

        # random time of day
        AddTalkListData(13, 200129, 12100956)
        AddTalkListData(14, 200130, 12100856)

        # doll gesture
        AddTalkListData(15, 200138, 12100954)
        AddTalkListData(16, 200139, 12100854)

        # bridge door
        AddTalkListData(17, 200220, 12100949)
        AddTalkListData(18, 200221, 12100849)

        AddTalkListData(30, 200153, 12102202) # activate all lamps
        AddTalkListData(31, 200155, 12102212) # activate all shortcuts

        AddTalkListData(32, 200231, 12100955)
        AddTalkListData(33, 200232, 12100855)

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent auto ng+
            SetEventState(12100973, 0)
            SetEventState(12100873, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent auto ng+
            SetEventState(12100973, 1)
            SetEventState(12100873, 0)
        elif GetTalkListEntryResult() == 3: # enable - stocked shop
            SetEventState(12100971, 0)
            SetEventState(12100871, 1)
        elif GetTalkListEntryResult() == 4: # disable - stocked shop
            SetEventState(12100971, 1)
            SetEventState(12100871, 0)
        elif GetTalkListEntryResult() == 5: # enable - coldblood in shop
            SetEventState(12100948, 0)
            SetEventState(12100848, 1)
        elif GetTalkListEntryResult() == 6: # disable - coldblood in shop
            SetEventState(12100948, 1)
            SetEventState(12100848, 0)
        elif GetTalkListEntryResult() == 7: # enable - restart fight on death
            SetEventState(12100964, 0)
            SetEventState(12100864, 1)
        elif GetTalkListEntryResult() == 8: # disable - restart fight on death
            SetEventState(12100964, 1)
            SetEventState(12100864, 0)
        elif GetTalkListEntryResult() == 9: # enable - rematch cutscenes
            SetEventState(12100966, 0)
            SetEventState(12100866, 1)
        elif GetTalkListEntryResult() == 10: # disable - rematch cutscenes
            SetEventState(12100966, 1)
            SetEventState(12100866, 0)
        elif GetTalkListEntryResult() == 11: # enable - unlocked chalice dungeons
            SetEventState(12100960, 0)
            SetEventState(12100860, 1)
        elif GetTalkListEntryResult() == 12: # disable - unlocked chalice dungeons
            SetEventState(12100960, 1)
            SetEventState(12100860, 0)
        elif GetTalkListEntryResult() == 13: # enable - random time of day
            SetEventState(12100956, 0)
            SetEventState(12100856, 1)
        elif GetTalkListEntryResult() == 14: # disable - random time of day
            SetEventState(12100956, 1)
            SetEventState(12100856, 0)
        elif GetTalkListEntryResult() == 15: # enable - doll gesture
            SetEventState(12100954, 0)
            SetEventState(12100854, 1)
        elif GetTalkListEntryResult() == 16: # disable - doll gesture
            SetEventState(12100954, 1)
            SetEventState(12100854, 0)
        elif GetTalkListEntryResult() == 17: # enable - bridge door
            SetEventState(12100949, 0)
            SetEventState(12100849, 1)
        elif GetTalkListEntryResult() == 18: # disable - bridge door
            SetEventState(12100949, 1)
            SetEventState(12100849, 0)
        elif GetTalkListEntryResult() == 30: # activate all lamps
            call = t220029_x101()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 31: # activate all shortcuts
            call = t220029_x102()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 32: # enable - infinite durability
            SetEventState(12100955, 0)
            SetEventState(12100855, 1)
        elif GetTalkListEntryResult() == 33: # disable - infinite durability
            SetEventState(12100955, 1)
            SetEventState(12100855, 0)

# portable lamp settings
def t220029_x106():
    while True:
        ClearTalkListData()

        # warp
        AddTalkListData(1, 200014, 12100881)
        AddTalkListData(2, 200013, 12100981)

        # level up
        AddTalkListData(3, 200016, 12100882)
        AddTalkListData(4, 200015, 12100982)

        # workshop
        AddTalkListData(5, 200018, 12100883)
        AddTalkListData(6, 200017, 12100983)

        # memory alter
        AddTalkListData(7, 200020, 12100884)
        AddTalkListData(8, 200019, 12100984)

        # storage
        AddTalkListData(9, 200022, 12100885)
        AddTalkListData(10, 200021, 12100985)

        # messengers
        AddTalkListData(11, 200024, 12100886)
        AddTalkListData(12, 200023, 12100986)

        # change appearance
        AddTalkListData(13, 200026, 12100887)
        AddTalkListData(14, 200025, 12100987)

        # enhanced settings
        AddTalkListData(15, 200234, 12100888)
        AddTalkListData(16, 200233, 12100988)

        # double tap action
        AddTalkListData(17, 200271, 12102100) # warp menu - toggle to hunter's dream
        AddTalkListData(18, 200272, 12102101) # hunter's dream - toggle to reawaken
        AddTalkListData(19, 200273, 12102102) # reawaken - toggle to nothing
        AddTalkListData(20, 200274, 12102103) # nothing - toggle to warp menu

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # disable - warp menu
            SetEventState(12100981, 1)
            SetEventState(12100881, 0)
        elif GetTalkListEntryResult() == 2: # enable - warp menu
            SetEventState(12100981, 0)
            SetEventState(12100881, 1)
        elif GetTalkListEntryResult() == 3: # disable - level up
            SetEventState(12100982, 1)
            SetEventState(12100882, 0)
        elif GetTalkListEntryResult() == 4: # enable - level up
            SetEventState(12100982, 0)
            SetEventState(12100882, 1)
        elif GetTalkListEntryResult() == 5: # disable - workshop
            SetEventState(12100983, 1)
            SetEventState(12100883, 0)
        elif GetTalkListEntryResult() == 6: # enable - workshop
            SetEventState(12100983, 0)
            SetEventState(12100883, 1)
        elif GetTalkListEntryResult() == 7: # disable - memory alter
            SetEventState(12100984, 1)
            SetEventState(12100884, 0)
        elif GetTalkListEntryResult() == 8: # enable - memory alter
            SetEventState(12100884, 0)
            SetEventState(12100884, 1)
        elif GetTalkListEntryResult() == 9: # disable - storage
            SetEventState(12100985, 1)
            SetEventState(12100885, 0)
        elif GetTalkListEntryResult() == 10: # enable - storage
            SetEventState(12100985, 0)
            SetEventState(12100885, 1)
        elif GetTalkListEntryResult() == 11: # disable - messengers
            SetEventState(12100986, 1)
            SetEventState(12100886, 0)
        elif GetTalkListEntryResult() == 12: # enable - messengers
            SetEventState(12100986, 0)
            SetEventState(12100886, 1)
        elif GetTalkListEntryResult() == 13: # disable - change appearance
            SetEventState(12100987, 1)
            SetEventState(12100887, 0)
        elif GetTalkListEntryResult() == 14: # enable - change appearance
            SetEventState(12100987, 0)
            SetEventState(12100887, 1)
        elif GetTalkListEntryResult() == 15: # disable - enhanced menu
            SetEventState(12100988, 1)
            SetEventState(12100888, 0)
        elif GetTalkListEntryResult() == 16: # enable - enhanced menu
            SetEventState(12100988, 0)
            SetEventState(12100888, 1)
        elif GetTalkListEntryResult() == 17: # double tap - warp menu - toggle to hunter's dream
            SetEventState(12102100, 0)
            SetEventState(12102101, 1)
            SetEventState(12102102, 0)
            SetEventState(12102103, 0)
        elif GetTalkListEntryResult() == 18: # double tap - hunter's dream - toggle to reawaken
            SetEventState(12102100, 0)
            SetEventState(12102101, 0)
            SetEventState(12102102, 1)
            SetEventState(12102103, 0)
        elif GetTalkListEntryResult() == 19: # double tap - reawaken - toggle to nothing
            SetEventState(12102100, 0)
            SetEventState(12102101, 0)
            SetEventState(12102102, 0)
            SetEventState(12102103, 1)
        elif GetTalkListEntryResult() == 20: # double tap - nothing - toggle to warp menu
            SetEventState(12102100, 1)
            SetEventState(12102101, 0)
            SetEventState(12102102, 0)
            SetEventState(12102103, 0)

# summon settings
def t220029_x107():
    while True:
        ClearTalkListData()
        
        AddTalkListData(3, 200275, -1) # grand-resonance bell

        # summons signs always available
        AddTalkListData(1, 200278, 12100989) # on - toggle off
        AddTalkListData(2, 200279, 12100889) # off - toggle on

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # summons signs always available - on - toggle off
            SetEventState(12100989, 0)
            SetEventState(12100889, 1)
        elif GetTalkListEntryResult() == 2: # summons signs always available - off - toggle on
            SetEventState(12100989, 1)
            SetEventState(12100889, 0)
        elif GetTalkListEntryResult() == 3: # grand-resonance bell settings
            call = t220029_x108()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# grand-resonance bell settings
def t220029_x108():
    while True:
        ClearTalkListData()

        # double tap
        AddTalkListData(1, 200276, 12102110) # gather - toggle to nothing
        AddTalkListData(2, 200274, 12102111) # nothing - toggle to gather

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # double tap - gather - toggle to nothing
            SetEventState(12102110, 0)
            SetEventState(12102111, 1)
        elif GetTalkListEntryResult() == 2: # double tap - nothing - toggle to gather
            SetEventState(12102110, 1)
            SetEventState(12102111, 0)

# increase cycle
def t220029_x100(flag=999):
    while True:
        OpenGenericDialog(2, 200146, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102001, 1)
            SetEventState(flag, 1)
            
            if GetEventStatus(12102003) == 1:
                OpenGenericDialog(1, 200147, 1, 0, 1)
            elif GetEventStatus(12102004) == 1:
                OpenGenericDialog(1, 200148, 1, 0, 1)
            elif GetEventStatus(12102005) == 1:
                OpenGenericDialog(1, 200149, 1, 0, 1)
            elif GetEventStatus(12102006) == 1:
                OpenGenericDialog(1, 200150, 1, 0, 1)
            elif GetEventStatus(12102007) == 1:
                OpenGenericDialog(1, 200151, 1, 0, 1)
            elif GetEventStatus(12102008) == 1:
                OpenGenericDialog(1, 200152, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# activate all lamps
def t220029_x101():
    while True:
        OpenGenericDialog(2, 200154, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102201, 1)
            OpenGenericDialog(1, 200158, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# unlock all shortcuts
def t220029_x102():
    while True:
        OpenGenericDialog(2, 200156, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102211, 1)
            OpenGenericDialog(1, 200157, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# respec
def t220029_x103():
    while True:
        ClearTalkListData()

        AddTalkListData(1, 200201, -1) # milquetoast
        AddTalkListData(2, 200202, -1) # lone survivor
        AddTalkListData(3, 200203, -1) # troubled childhood
        AddTalkListData(4, 200204, -1) # violent past
        AddTalkListData(5, 200205, -1) # professional
        AddTalkListData(6, 200206, -1) # military veteran
        AddTalkListData(7, 200207, -1) # noble scion
        AddTalkListData(8, 200208, -1) # cruel fate
        AddTalkListData(9, 200209, -1) # waste of skin

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # milquetoast
            call = t220029_x104(d1=200211, e1=12308040)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 2: # lone survivor
            call = t220029_x104(d1=200212, e1=12308041)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 3: # troubled childhood
            call = t220029_x104(d1=200213, e1=12308042)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 4: # violent past
            call = t220029_x104(d1=200214, e1=12308043)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 5: # professional
            call = t220029_x104(d1=200215, e1=12308044)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 6: # military veteran
            call = t220029_x104(d1=200216, e1=12308045)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 7: # noble scion
            call = t220029_x104(d1=200217, e1=12308046)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 8: # cruel fate
            call = t220029_x104(d1=200218, e1=12308047)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 9: # waste of skin
            call = t220029_x104(d1=200219, e1=12308048)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# character stats
def t220029_x104(d1=0, e1=0):
    while True:
        OpenGenericDialog(2, d1, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            call = t220029_x105(e1)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1

# final confirmation
def t220029_x105(e1=0):
    while True:
        OpenGenericDialog(2, 200210, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12308030, 1)
            SetEventState(e1, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1